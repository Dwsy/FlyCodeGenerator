import { VideoHTMLAttributes } from "vue";
import { message } from "../../util/message";



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

export const allAvailableVideos = [
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT312_162NC_139M_1041_AFRICA_NIGHT_v14_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A103_C002_0205DG_v12_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/g201_AK_A003_C014_SDR_20191113_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/AK_A004_C012_SDR_20191217_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT110_112NC_364D_1054_AURORA_ANTARTICA__COMP_FINAL_v34_PS_SDR_20181107_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A001_C001_120530_v04_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT060_117NC_363D_1034_AUSTRALIA_v35_SDR_PS_FINAL_20180731_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/BO_A018_C029_SDR_20190812_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/BO_A014_C008_SDR_20190719_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/DL_B002_C011_SDR_20191122_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/g201_CA_A016_C002_SDR_20191114_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT306_139NC_139J_3066_CALI_TO_VEGAS_v08_SDR_PS_20180824_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A105_C002_v06_SDR_FINAL_25062018_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A108_C001_v09_SDR_FINAL_22062018_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT308_139K_142NC_CARIBBEAN_DAY_v09_SDR_FINAL_22062018_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_CH_C002_C005_PSNK_v05_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_CH_C007_C004_PSNK_v02_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_C003_C003_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT329_113NC_396B_1105_CHINA_v04_SDR_FINAL_20180706_F900F2700_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_CH_C007_C011_PSNK_v02_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_C001_C005_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_C004_C003_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/CR_A009_C007_SDR_20191113_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/MEX_A006_C008_SDR_20190923_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_DB_D011_C010_PSNK_DENOISE_v19_SDR_PS_20180914_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_DB_D008_C010_PSNK_v21_SDR_PS_20180914_F0F16157_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_DB_D002_C003_PSNK_v04_SDR_PS_20180914_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_DB_D001_C001_PSNK_v06_SDR_PS_20180824_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_DB_D001_C005_COMP_PSNK_v12_SDR_PS_20180912_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/G007_C004_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/G008_C015_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/G009_C003_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/G009_C014_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/G010_C026_UHD_SDR_v02_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/FK_U009_C004_SDR_20191220_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GL_G002_C002_PSNK_v03_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GL_G004_C010_PSNK_v04_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GL_G010_C006_PSNK_NOSUN_v12_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_H012_C009_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_H004_C009_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_H005_C012_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_H004_C007_PS_v02_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_H007_C003_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_HK_B005_C011_PSNK_v16_SDR_PS_20180914_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_HK_H004_C010_PSNK_v08_SDR_PS_20181009_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_HK_H004_C013_t9_6M_HB_tag0.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_HK_H004_C008_PSNK_v19_SDR_PS_20180914_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/g201_WH_D004_L014_SDR_20191031_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I003_C008_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I003_C011_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I004_C014_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I003_C015_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I003_C004_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/I005_C008_CROP_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A083_C002_1130KZ_v04_SDR_PS_FINAL_20180725_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT329_117NC_401C_1037_IRELAND_TO_ASIA_v48_SDR_PS_FINAL_20180725_F0F6300_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT329_113NC_396B_1105_ITALY_v03_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/BO_A014_C023_SDR_20190717_F240F3709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/KP_A010_C002_SDR_20190717_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT026_363A_103NC_E1027_KOREA_JAPAN_NIGHT_v18_SDR_PS_20180907_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LW_L001_C003__PSNK_DENOISE_v04_SDR_PS_FINAL_20180803_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LW_L001_C006_PSNK_DENOISE_v02_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_L007_C007_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_L012_c002_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_L010_C006_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_L004_C011_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A008_C004_ALTB_ED_FROM_FLAME_RETIME_v46_SDR_PS_20180917_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A005_C009_PSNK_ALT_v09_SDR_PS_201809134_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A011_C003_DGRN_LNFIX_STAB_v57_SDR_PS_20181002_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A006_C004_v01_SDR_FINAL_PS_20180730_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A006_C008_PSNK_ALL_LOGOS_v10_SDR_PS_FINAL_20180801_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_LA_A009_C009_PSNK_v02_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_N013_C004_PS_v01_SDR_PS_20180925_F1970F7193_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_N008_C009_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_N008_C003_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_N003_C006_PS_v01_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT307_136NC_134K_8277_NY_NIGHT_01_v25_SDR_PS_20180907_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A105_C003_0212CT_FLARE_v10_SDR_PS_FINAL_20180711_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A050_C004_1027V8_v16_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_GMT314_139M_170NC_NORTH_AMERICA_AURORA__COMP_v22_SDR_20181206_v12CC_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/PA_A004_C003_SDR_20190719_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/PA_A001_C007_SDR_20190717_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/PA_A002_C009_SDR_20190730_ALT01_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/PA_A010_C007_SDR_20190717_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/P001_C005_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/P005_C002_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/P006_C002_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/P007_C027_UHD_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/RS_A008_C010_SDR_20191218_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A009_C001_010181A_v09_SDR_PS_FINAL_20180725_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A013_C012_0122D6_CC_v01_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A015_C018_0128ZS_v03_SDR_PS_FINAL_20180709__SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A006_C003_1219EE_CC_v01_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_1223LV_FLARE_v21_SDR_PS_FINAL_20180709_F0F5700_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A008_C007_011550_CC_v01_SDR_PS_FINAL_20180709_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A012_C014_1223PT_v53_SDR_PS_FINAL_20180709_F0F8700_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A007_C017_01156B_v02_SDR_PS_20180925_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/S003_C020_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/S006_C007_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/S005_C015_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/BO_A012_C031_SDR_20190726_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/SE_A016_C009_SDR_20190717_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A351_C001_v06_SDR_PS_20180725_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A114_C001_0305OT_v10_SDR_FINAL_22062018_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/g201_TH_803_A001_8_SDR_20191031_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/g201_TH_804_A001_8_SDR_20191031_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/comp_A001_C004_1207W5_v23_SDR_FINAL_20180706_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y004_C015_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y005_C003_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y002_C013_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y003_C009_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y011_C001_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y009_C015_SDR_2K_AVC.mov",
    "https://applescreensaver.macify.workers.dev/Videos/Y011_C008_SDR_2K_AVC.mov"
]

export const switchVideo = () => {

    const videoElement = document.getElementById("myVideo") as HTMLVideoElement;

    if (videoElement) {
        videoElement.style.opacity = '0.9';
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * allAvailableVideos.length);
            const nextVideoUrl = allAvailableVideos[randomIndex];

            videoElement.src = nextVideoUrl;
            videoElement.load();
            videoElement.play();
            videoElement.style.opacity = '1';
        }, 650);
    } else {
        const videoUrl = "";
        const videoElement = document.createElement("video");
        videoElement.id = "myVideo";
        videoElement.src = videoUrl;
        videoElement.autoplay = true;
        videoElement.style.opacity = "0.9";
        document.body.appendChild(videoElement);
        setTimeout(() => {
            switchVideo()
        }, 666);
        // const errorBox = document.getElementById("errorBox");
        // errorBox.textContent = "error_video_source"
        // errorBox.style.display = "block";
        // errorBox.style.backgroundColor = "#ff000094";
        // document.body.style.backgroundColor = "black";
    }
}
