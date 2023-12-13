
debugger
/**
 * @typedef {Object} Activity
 *
 * @property {number} channel_id - 售达方ID
 * @property {number} store_id - 送达方ID
 * @property {number} activity_product_id - 产品ID
 * @property {string} type - 活动类型
 * @property {string} startDate - 活动开始日期
 * @property {string} endDate - 活动结束日期
 */

/**
 * 活动列表
 *
 * @type {Array<Activity>} Activities
 *
 */
const activities = []
/**
 * 叠加预警
 * 列表数据来源：当系统识别到“相同产品、不同业务活动类型、相同/重叠期间的促销政策有叠加时”计入该列表预警显示
 * 是否允许叠加：默认为【否】，支持手动修改
 */

// //get table
// const DZ_table = Page.getArrayCtrl("BD-DZ-表格")

// const TJ_table = Page.getArrayCtrl("BD-TJ-表格")

// const MJ_table = Page.getArrayCtrl("BD-MJ-表格")

// const TY_table = Page.getArrayCtrl("BD-TY-表格")

// //get all row
// const DZ_allRow = DZ_table.getInScope('all')

// const TJ_allRow = TJ_table.getInScope('all')

// const MJ_allRow = MJ_table.getInScope('all')

// const TY_allRow = TY_table.getInScope('all')

//mock data
const DZ_allRow = [
    {
        id: '1734045251078852608',
        salearea_id: '1722091689797095424',
        customer_id: '1726507097270652928',
        channel_id: '1729713090230095872',
        store_id: '1729713080096657408',
        no_store_id: '',
        payment_method: '["1730412126780133376"]',
        product_range: '1729383275912368128',
        activity_product_id: '1731917876270600192',
        activity_execution_cycle_start: '{"start":"1701360000000","end":"1706630400000"}'
    }
]

const TJ_allRow = [
    {
        id: '1733315503629406208',
        salearea_id: '1722091689797095424',
        customer_id: '1726507097270652928',
        channel_id: '1729713090230095872',
        store_id: '1729713080096657408',
        product_range: '1729383275912368128',
        activity_product_id: '1731917876270600192',
        excluded_store_id: '',
        activity_execution_cycle_start: '{"start":"1701878400000","end":"1704902399000"}'
    }
]

const MJ_allRow = [
    {
        id: '1733315503629406208',
        salearea_id: '1722091689797095424',
        customer_id: '1726507097270652928',
        channel_id: '1729713090230095872',
        store_id: '1729713080096657408',
        product_range: '1729383275912368128',
        activity_product_id: '1731917876270600192',
        excluded_store_id: '',
        activity_execution_cycle_start: '{"start":"1670270400000","end":"1684902399000"}'
    }
]

const TY_allRow = [
    {
        id: '1733315503629406208',
        salearea_id: '1722091689797095424',
        customer_id: '1726507097270652928',
        channel_id: '1729713090230095872',
        store_id: '1729713080096657408',
        product_range: '1729383275912368128',
        activity_product_id: '1731917876270600192',
        excluded_store_id: '',
        activity_execution_cycle_start: '{"start":"1701878400000","end":"1704902399000"}'
    }
]

//mock end

//push data
const DZ_repeatSet = new Set()

handelTableRows('DZ', DZ_allRow)
handelTableRows('TJ', TJ_allRow)
handelTableRows('MJ', MJ_allRow)
handelTableRows('TY', TY_allRow)
function handelTableRows(type, allRow) {
    allRow.forEach((item) => {
        if (item.activity_execution_cycle_start) {
            const dateRange = JSON.parse(item.activity_execution_cycle_start)
            const data = {
                channel_id: item.channel_id,
                store_id: item.store_id,
                type: type,
                activity_product_id: item.activity_product_id,
                startDate: dateRange.start,
                endDate: dateRange.end
            }
            const key = data.channel_id + '|' + data.store_id + '|' + data.type + '|' + data.activity_product_id
            if (!DZ_repeatSet.has(key)) {
                let flag = true
                for (const value in data) {
                    if (!value) {
                        flag = false
                    }
                }
                if (flag) {
                    activities.push(data)
                }
            } else {
                console.log('重复', item)
            }
        }
    })
}

console.log(activities.length)
//
const map = new Map()
activities.forEach((item) => {
    const key =
        String(item.channel_id) +
        '|' +
        String(item.store_id) +
        '|' +
        // + item.type + "|"
        item.activity_product_id
    if (map.get(key)) {
        map.get(key).push(item)
        console.log('一级叠加', key)
    } else {
        map.set(key, [item])
    }
})
const OverlappingMap = new Map()

map.forEach((v, k) => {
    console.log(v.length, k)
    areDateRangesOverlapping(k, v)
})
// map2.push(item.type + "|" +  + "|" + item.startDate + "|" + item.endDate, it

function areDateRangesOverlapping(key, ranges) {
    for (let i = 0; i < ranges.length; i++) {
        // console.log(ranges.length)
        for (let j = i + 1; j < ranges.length; j++) {
            console.log(i, j)
            const range1 = ranges[i]
            const range2 = ranges[j]

            const start1 = range1.startDate
            const end1 = range1.endDate
            const start2 = range2.startDate
            const end2 = range2.endDate

            // 检查是否有重叠
            if (start1 <= end2 && end1 >= start2) {
                // console.log(ranges)
                console.log(`${ranges[i].type} ${ranges[i].startDate} 和 ${ranges[i].startDate} 重叠`)
                console.log(`${ranges[j].type} ${ranges[j].startDate} 和 ${ranges[j].startDate} 重叠`)
                console.log(`日期区间 ${ranges[i].type} 和 ${ranges[j].type} 重叠`)
                if (OverlappingMap.get(key)) {
                    OverlappingMap.get(key).push([ranges[i], ranges[j]])
                } else {
                    OverlappingMap.set(key, [ranges[i], ranges[j]])
                }

                // return true; // 有重叠
            } else {
                console.log(`${ranges[i].type} ${ranges[i].startDate} 和 ${ranges[i].startDate} `)
                console.log(`${ranges[j].type} ${ranges[j].startDate} 和 ${ranges[j].startDate} `)
            }
        }
    }

    console.log('日期区间没有重叠')
    return false // 没有重叠
}
OverlappingMap.forEach((v, k) => {
    console.log(v, k)
})
// console.log(OverlappingMap)

// const isOverlap = checkDateOverlap(data);
// console.log(isOverlap); // 输出 true，因为日期区间重叠
