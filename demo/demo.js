fetch('http://localhost:3000/get_desktop_picture_base64')
  .then((response) => response.text())
  .then((data) => {
    // 使用获取到的Base64数据创建一个图片URL
    const imageUrl = 'data:image/png;base64,' + data

    // 将图片URL设置为body的背景图片
    document.body.style.backgroundImage = 'url(' + imageUrl + ')'
  })
  .catch((error) => console.error(error))
