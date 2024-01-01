export interface WallpaperOptions {
    randomWallpaper: boolean
    enableYIYAN: boolean
    enableStartWallpaper: boolean
    startWallpaperUrl: string
    startWallpaperSource: string[]
    selectedWallpaperUrl: string
    selectRandomWallpaperSource: RandomWallpaperDetail[]
}

export interface RandomWallpaperDetail {
    name: string
    url: string
    source: string
}

export function useWallpaperOptionsStore() {
    return useLocalStorage('wallpaperOptions', wallpaperDefaultOptions)
}


const atmThumb = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F0bed5abed95248abf565cf5c09ecfb4d5a8e3a2a.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664353324&t=fb85505eb17535b08da4704cd180ad44'
export const randomWallpaperSourceMap = new Map<string, RandomWallpaperDetail>()
randomWallpaperSourceMap.set('paugram_sina', {
    name: 'paugram_sina',
    url: 'https://api.paugram.com/wallpaper/?source=sina',
    source: 'sina'
})
randomWallpaperSourceMap.set('paugram_jsd', {
    name: 'paugram_jsd',
    url: 'https://api.paugram.com/wallpaper/?source=jsd',
    source: 'jsd'
})
randomWallpaperSourceMap.set('paugram_sm', {
    name: 'paugram_sm',
    url: 'https://api.paugram.com/wallpaper/?source=sm',
    source: 'sm'
})
randomWallpaperSourceMap.set('yimian', {
    name: 'yimian',
    url: 'https://api.yimian.xyz/img?type=moe&size=1920x1080',
    source: 'yimian'
})
randomWallpaperSourceMap.set('likepoems', {
    name: 'likepoems',
    url: 'https://api.likepoems.com/img/pc/',
    source: 'likepoems'
})
randomWallpaperSourceMap.set('lyiqk_acg', {
    name: 'lyiqk_acg',
    url: 'https://api.lyiqk.cn/acg',
    source: 'lyiqk_acg'
})
randomWallpaperSourceMap.set('lyiqk_dfproject', {
    name: 'lyiqk_dfproject',
    url: 'https://api.lyiqk.cn/dfproject',
    source: 'lyiqk_dfproject'
})
randomWallpaperSourceMap.set('lyiqk_menhera', {
    name: 'lyiqk_menhera',
    url: 'https://api.lyiqk.cn/menhera',
    source: 'lyiqk_menhera'
})
randomWallpaperSourceMap.set('lyiqk_miku', {
    name: 'lyiqk_miku',
    url: 'https://api.lyiqk.cn/miku',
    source: 'lyiqk_miku'
})
randomWallpaperSourceMap.set('loliapi_acg', {
    name: 'loliapi_acg',
    url: 'https://www.loliapi.com/acg/pc/',
    source: 'loliapi_acg'
})
randomWallpaperSourceMap.set('lyiqk_acgst', {
    name: 'lyiqk_acgst',
    url: 'https://api.lyiqk.cn/acgst',
    source: 'lyiqk_acgst'
})
randomWallpaperSourceMap.set('lyiqk_lol', {
    name: 'lyiqk_lol',
    url: 'https://api.lyiqk.cn/lol',
    source: 'lyiqk_lol'
})
randomWallpaperSourceMap.set('lyiqk_scenery', {
    name: 'lyiqk_scenery',
    url: 'https://api.lyiqk.cn/scenery',
    source: 'lyiqk_scenery'
})
randomWallpaperSourceMap.set('lyiqk_bing', {
    name: 'lyiqk_bing',
    url: 'https://api.lyiqk.cn/bing',
    source: 'lyiqk_bing'
})


const wallpaperDefaultOptions: WallpaperOptions = {
    randomWallpaper: false,
    enableYIYAN: false,
    enableStartWallpaper: false,
    startWallpaperUrl: atmThumb,
    startWallpaperSource: [],
    selectedWallpaperUrl: '',
    selectRandomWallpaperSource: [],
}