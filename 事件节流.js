var textarea = document.getElementById('text')
var timeoutId
textarea.addEventListener('keyup', function () {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(function () {
    // 触发 change 事件
  }, 100)
})