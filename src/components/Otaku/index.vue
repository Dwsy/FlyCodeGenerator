<script setup lang="tsx">
import axios from 'axios'
import { message } from '../../util/message'
import { randomImg } from '.'

onMounted(async () => {
  // @ts-ignore
  window.addBimg = (url, opacity) => {
    var body = document.body
    url =
      url ||
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F0bed5abed95248abf565cf5c09ecfb4d5a8e3a2a.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664353324&t=fb85505eb17535b08da4704cd180ad44'
    body.style.backgroundImage = `url(${url})`
    body.style.backgroundSize = 'cover'
    body.style!.opacity = opacity || '0.9'
  }

  setTimeout(async () => {
    //@ts-ignore
    window.addBimg(null, 0.7)
    setTimeout(() => {
      randomImg()
    }, 2000)
  }, 200)
  let yy = (await axios.post('https://v1.hitokoto.cn/')).data
  message.success(
    () => {
      return h(
        <div>
          <div>{yy.hitokoto}</div>
          <div style="float:right">-{yy.from}</div>
        </div>
      )
    },
    { duration: 3010 }
  )
  //添加键盘事件 command + s
  setTimeout(() => {
    document.addEventListener('keydown', async (event) => {
      if (event.ctrlKey && event.key === 'z') {
        let yy = (await axios.get('https://v1.hitokoto.cn/')).data
        message.success(
          () => {
            return h(
              <div>
                <div>{yy.hitokoto}</div>
                <div style="float:right">by:{yy.from}</div>
              </div>
            )
          },
          { duration: 3010, showIcon: false }
        )
        randomImg()
        event.preventDefault()
      }
      if (event.ctrlKey && event.key === 'x') {
        //@ts-ignore
        window.addBimg('null', '0.9')
        event.preventDefault()
      }
    })
    let ctrlPressed = false

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Control') {
        ctrlPressed = true
      }

      if (event.key === 'c' && ctrlPressed) {
        console.log('Ctrl+C pressed')
        document.body.style.opacity = '0'
        document.body.style.zIndex = '9999'
      }
    })

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Control') {
        ctrlPressed = false
        document.body.style.opacity = '0.9'
        document.body.style.zIndex = ''
      }
    })
    //按下ctrl + Shift + z下载body背景图片
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'z') {
        let url = document.body.style.backgroundImage
        url = url.replace('url(', '').replace(')', '').replace(/\"/gi, '')
        console.log(url)
        let a = document.createElement('a')
        a.href = url
        a.download = 'flycode_bg'
        a.click()
      }
    })
  }, 2000)
})
</script>

<template></template>
