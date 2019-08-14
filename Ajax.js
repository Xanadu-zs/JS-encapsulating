var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  //此处函数异步执行
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}

xhr.open('GET', '/api', false)
xhr.send(null)