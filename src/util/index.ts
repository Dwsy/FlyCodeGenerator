import axios from "axios";
import { useFlyStore } from "../store/flyStore";

/**
 * 获取表的简称。
 * 
 * @param {string} tableName - 表名。
 * @param {string} [relationTableColumnName] - 关联表列名。如果提供，将在简称后添加该列名的前三个字符。
 * @param {number} [seq] - 序列号。如果提供，将在简称后添加此序列号。
 * 
 * @returns {string} 表的简称。如果提供了序列号，简称将包含序列号。否则，如果提供了关联表列名，简称将包含该列名的前三个字符。
 */
export function getTableShortName(tableName: string, relationTableColumnName?: string, seq?: number): string {
  const words = tableName.split("_");
  const firstLetters = words.map((word) => word.charAt(0));
  let name = firstLetters.join("");
  if (seq != undefined) {
    name += seq
  } else {
    if (relationTableColumnName != undefined) {
      name += "_" + relationTableColumnName.slice(0, 3)
    }
  }
  return name;
}

export const copyToClipboard = (text: string) => {
  // 创建一个临时textarea元素以便执行复制操作
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);

  // 选择并执行复制操作
  textarea.select();
  document.execCommand('copy');

  // 移除临时textarea元素
  document.body.removeChild(textarea);

}

let getButtonSeq = (seq = 1) => {
  return () => seq++
}

/**
 * 添加一个新的按钮到指定的元素上。
 * 
 * @param {string | any} selector - 选择器或任何其他类型的参数，用于确定在哪里添加新的按钮。
 * @param {string} text - 新按钮的文本。
 * @param {string} iconClass - 新按钮的图标类名。
 * @param {() => void} clickHandler - 当点击新按钮时要执行的函数。
 * @param {number} [seq] - 按钮的序列号，用于确定新按钮的位置。如果未提供，将使用默认值。
 * @param {string} [hoverText] - 当鼠标悬停在新按钮上时显示的文本。如果未提供，将使用默认值。
 * 
 * @returns {ChildNode | undefined} - 如果成功添加了新按钮，返回新按钮的节点。如果未找到指定的元素或已存在相同序列号的按钮，返回 undefined。
 */
export const addButton = (selector: string | any, text: string, iconClass: string, clickHandler: () => void, seq?: number, hoverText?: string): ChildNode | undefined => {
  if (selector == undefined) {
    selector = "#beSetting > div.main-content > div.tab-operation > button:nth-child(2)"
  }
  const ButtonSeq = getButtonSeq(seq)//todo sort logic
  if (document.querySelector(`#beSetting > div.main-content > div.tab-operation > button:nth-child(${2 + ButtonSeq()})`) != null) {
    return
  }
  if (!document.querySelector(selector)) {
    console.error(`Button not found: ${selector}`);
    return;
  }
  const originalButton = document.querySelector(selector) as HTMLButtonElement;
  const originalButtonIcon = originalButton.querySelector("i") as HTMLElement;
  const newButton = originalButton.cloneNode(false) as HTMLButtonElement;
  const newButtonIcon = originalButtonIcon.cloneNode(true) as HTMLElement;
  newButtonIcon.classList.replace('ideicon-protocol', iconClass);
  const newButtonSpan = document.createElement('span');
  newButtonSpan.textContent = text;
  newButton.appendChild(newButtonIcon);
  newButton.appendChild(newButtonSpan);
  newButton.addEventListener("click", clickHandler);
  hoverText ? newButton.title = hoverText : newButton.title = 'dwsy'
  return originalButton.parentNode!.appendChild(newButton);
}



/**
 * 将字符串转换为驼峰命名
 * @param {string} str - 要转换的字符串。
 * @returns {string} 转换后的字符串。
 */
export function toCamelCase(str: string): string {
  if (!str) {
    return str;
  }
  return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
    .replace(/^([a-z])/g, (match, p1) => p1.toUpperCase());
}

/**
 * 获取指定表格的主键字段名称
 * @param {string} tablePropertyCode - 表格属性代码
 * @returns {string} 主键字段名称
 */
export function getPrimaryKey(tablePropertyCode: string): string {
  const flyStore = useFlyStore()

  const tableData = flyStore.tableDataMap.get(tablePropertyCode)
  let primaryKey = {
    pl_dictionary: "dictionaryid",
    pl_orgstruct: "orgstructid",
    pl_region: "regionid",
  }[tableData.tablename]
  if (!primaryKey) {
    for (const columnData of tableData.properties) {
      if (columnData.propertytypecode == "1") {
        primaryKey = columnData.columnname;
        break;
      }
    }
  }
  return primaryKey
}



/**
 * 计算两个字符串之间的 Levenshtein 距离
 * @param {string} str1 - 第一个字符串
 * @param {string} str2 - 第二个字符串
 * @returns {number} Levenshtein 距离
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

/**
 * 计算两个字符串的 Jaro-Winkler 相似度。
 * Jaro-Winkler 相似度是一种字符串相似度度量方法，适用于短字符串。
 * 它是 Jaro 相似度的变体，对字符串前缀的匹配给予更高的权重。
 *
 * @param s1 - 第一个字符串
 * @param s2 - 第二个字符串
 * @param p - 前缀权重因子，默认为 0.1
 * @returns 返回两个字符串的 Jaro-Winkler 相似度，范围在 0 到 1 之间，1 表示完全相同，0 表示完全不同
 */
export function jaroWinkler(s1: string, s2: string, p = 0.1): number {
  const m = Math.min(s1.length, s2.length);
  let range = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
  let m1 = Array(m);
  let m2 = Array(m);
  let m1Len = 0;
  let m2Len = 0;
  let transpositions = 0;
  let prefix = 0;

  for (let i = 0; i < s1.length; i++) {
    let start = i >= range ? 0 : Math.max(0, i - range);
    let end = i + range <= s2.length ? i + range : s2.length - 1;

    for (let j = start; j <= end; j++) {
      if (m2.includes(s1[i])) continue;
      if (s1[i] !== s2[j]) continue;
      m1[m1Len++] = s1[i];
      m2[m2Len++] = s2[j];
      break;
    }
  }

  if (m1Len === 0) return 0;

  for (let i = 0; i < m1Len; i++) {
    if (m1[i] !== m2[i]) transpositions++;
  }

  for (let i = 0; i < m; i++) {
    if (s1[i] === s2[i]) prefix++;
    else break;
  }

  let jaro = (m1Len / s1.length + m2Len / s2.length + (m1Len - transpositions / 2) / m1Len) / 3;
  return jaro + Math.min(p, 1 / m) * prefix * (1 - jaro);
}








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
    'https://api.yimian.xyz/img?type=moe&size=1920x1080',
    'https://api.likepoems.com/img/pc/',
    // 'https://api.lyiqk.cn/api',
    'https://api.lyiqk.cn/acg',
    // 'https://api.lyiqk.cn/dfproject',
    // 'https://api.lyiqk.cn/menhera',
    'https://api.lyiqk.cn/miku'
    // 'https://api.lyiqk.cn/acgst'
    // 'https://api.lyiqk.cn/lol',
    // 'https://api.lyiqk.cn/scenery',
    // 'https://api.lyiqk.cn/bing'
  ]

  let randomUrl = urls[Math.floor(Math.random() * urls.length)]
  // debugger
  //@ts-ignore
  window.addBimg(randomUrl, '0.9')
}