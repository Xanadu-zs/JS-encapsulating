// <a class="api a"> a.html</a>
// <a class="api b"> b.html</a>

// 注册路由,监听点击事件
document.querySelectorAll('.api').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); //阻止默认事件
    let link = item.textContent;
    // 创建历史记录，（自定义参数，title，地址）
    window.history.pushState({ name: 'api' }, link, link)
  }, false)
})

// 监听路由
window.addEventListener('popstate', (e) => {
  console.log({
    location: location.href,
    state: e.state
  })
})

// hash
// <a class="hash a">hash a</a>  
// <a class="hash b">hash b</a>

// 注册路由,监听点击事件
document.querySelectorAll('.hash').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); //阻止默认事件
    let link = item.textContent;
    location.hash = link;

  }, false)
})

// 监听路由
window.addEventListener('hashchange', (e) => {
  console.log({
    location: location.href,
    hash: location.hash
  })
})
