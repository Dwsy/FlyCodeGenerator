


/**
 * 将指定 URL 的资源下载为 Blob 对象的地址
 * @param {string} url - 要下载的资源的 URL
 * @returns {Promise<string>} 包含 Blob 地址的 Promise 对象
 */
export const urlDownload2Blo1b = async (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    reject(); // 如果响应状态不是200，则拒绝 Promise
                }
                return res;
            })
            .then(res => res.blob()) // 将响应数据转换为 Blob 对象
            .then(blob => {
                // 兼容 Safari
                window.URL = window.URL || window.webkitURL;
                // 将 Blob 对象转换为 Blob 地址
                const blobUrl = window.URL.createObjectURL(blob);
                resolve(blobUrl); // 解析 Promise 并返回 Blob 地址
            })
            .catch(error => {
                reject(error); // 处理异常情况并拒绝 Promise
            });
    });
};
/**
* 将指定 URL 的资源下载为 Blob 对象的地址
* @param {string} url - 要下载的资源的 URL
* @returns {Promise<string>} 包含 Blob 地址的 Promise 对象
*/
export const urlDownload2Blob = async (url) => {
    try {
        debugger
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch resource');
        }

        const blob = await response.blob();

        // 兼容 Safari
        window.URL = window.URL || window.webkitURL;

        // 将 Blob 对象转换为 Blob 地址
        const blobUrl = window.URL.createObjectURL(blob);

        return blobUrl;
    } catch (error) {
        // 在异步函数中，可以直接使用 throw 将错误抛出
        throw error;
    }
};



export const setIdeTheme = async (src) => {
    debugger
    const imgUrl = document.body.style.backgroundImage
    const image = new Image()
    image.style.display = 'hide'
    await urlDownload2Blob(src)
    // image.src = src

    // document.body.appendChild(image)
    // image.onload = function () {
    // 创建Canvas元素
    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')

    // 设置Canvas大小为图像的大小
    canvas.width = image.width
    canvas.height = image.height

    // 将图像绘制到Canvas上
    context.drawImage(image, 0, 0, canvas.width, canvas.height)

    // 获取图像像素数据
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height).data

    // 存储颜色和计数
    var colorCount = {}

    // 遍历每个像素
    for (var i = 0; i < imageData.length; i += 4) {
        // 提取RGB值
        var color = imageData.slice(i, i + 3).join(',')

        // 记录颜色出现的次数
        colorCount[color] = (colorCount[color] || 0) + 1
    }

    // 将颜色和计数转换为数组
    var colors = Object.keys(colorCount).map(function (color) {
        return {
            color: color.split(',').map(Number),
            count: colorCount[color]
        }
    })
    debugger
    // 按计数降序排序
    colors.sort(function (a, b) {
        return b.count - a.count
    })

    // 提取前三种颜色
    var topColors = colors.slice(0, 3).map(function (item) {
        return item.color
    })

    console.log(topColors)
    document.body.style.setProperty('--theme-primary-color', topColors[0].toString())
}
// }


export function randomImg() {
    // document.body.style.setProperty('--theme-primary-color',color)
    const urls = [
        'https://api.paugram.com/wallpaper/?source=sina',
        'https://api.paugram.com/wallpaper/?source=jsd',
        'https://api.paugram.com/wallpaper/?source=jsd',
        'https://api.paugram.com/wallpaper/?source=sm',
        // 'https://api.yimian.xyz/img?type=moe&size=1920x1080',
        'https://api.likepoems.com/img/pc/',
        'https://api.lyiqk.cn/acg',
        // 'https://api.lyiqk.cn/dfproject',
        'https://api.lyiqk.cn/menhera',
        'https://api.lyiqk.cn/miku',
        'https://www.loliapi.com/acg/pc/',
        // 'https://api.lyiqk.cn/acgst'
        // 'https://api.lyiqk.cn/lol',
        'https://api.lyiqk.cn/scenery',
        'https://api.lyiqk.cn/bing'
    ]

    let randomUrl = urls[Math.floor(Math.random() * urls.length)]
    // debugger
    //@ts-ignore
    window.addBimg(randomUrl, '0.92')
}
