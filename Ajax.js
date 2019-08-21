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



var xhr = new XMLHttpRequest() //声明一个请求对象


xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { //readyState 4代表已向服务器发送请求
    if (xhr.status === OK) { // status 200代表服务器返回是成功的
      console.log(xhr.responseText); //这是返回的文本
    } else {
      console.log("Error: " + xhr.status);   //链接失败的时候抛出错误
    }
  }
}

xhr.open('GET', 'xxxx')
