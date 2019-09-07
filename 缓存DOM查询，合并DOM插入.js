var i;
for (i = 0; i < document.getElementsByTagName('p').length; i++) {
  // todo
}

var pList = document.getElementsByTagName('p')

var i

for (i = 0; i < pList.length; i++) {
  // todo
}

// 缓存后


var listNode = document.getElementById('list')

var frag = document.createDocumentFeagment()

var x, li
for (x = 0; x < 10; x++) {
  li = document.createElement9("li")
  li.innerHTML = "List Item" + x;
  frag.appendChild(li)
}

listNode.appendChild(frag)


