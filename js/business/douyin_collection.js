var listObj = [];

// 抖音发现
var listDomArr = document.querySelectorAll(".hj9upPjt");
if (listDomArr.length) {
  for (var i = 0; i < listDomArr.length; i++) {
    let temp = Object.assign(
      {},
      {
        url: listDomArr[i].children[0].attributes.href.textContent,
        rank: listDomArr[
          i
        ].children[0].children[0].lastElementChild.innerText.slice(0, -6),
        title: listDomArr[i].children[1].innerText,
        upname: listDomArr[i].lastElementChild.children[0].innerText,
        uptime: listDomArr[i].lastElementChild.children[1].innerText,
      }
    );
    listObj.push(temp);
  }
}
// 抖音首页
var indeIistDomArr = document.querySelectorAll(".swiper-slide");
//
if (indeIistDomArr.length) {
  for (var i = 0; i < indeIistDomArr.length; i++) {
    let temp = Object.assign(
      {},
      {
        url: listDomArr[i].children[0].attributes.href.textContent,
        rank: listDomArr[
          i
        ].children[0].children[0].lastElementChild.innerText.slice(0, -6),
        title: listDomArr[i].children[1].innerText,
        upname: listDomArr[i].lastElementChild.children[0].innerText,
        uptime: listDomArr[i].lastElementChild.children[1].innerText,
      }
    );
    listObj.push(temp);
  }
}

var postDataObj = [];
chrome.storage.local.get('douyin_collection', function(res){
  console.info('1', res)
  if(res.douyin_collection) {
    let urlArry = listObj.map(item=>item.url)
    let sliceIndex = urlArry.findIndex(item => item === res.douyin_collection)
    if(sliceIndex > 0) {

      postDataObj = listObj.slice(sliceIndex + 1)
    }else {

    postDataObj = listObj
    }
  }else {
    postDataObj = listObj
  }
  chrome.runtime.sendMessage(
    { action: "toEnd", message: postDataObj },
    function (response) {
      chrome.storage.local.set({douyin_collection: response}, function() {})
      console.info(response);
    }
  );
console.info(postDataObj)
})
console.info('0', postDataObj)
// chrome.storage.sync.set({douyin_collection: ''}, function() {console.info('douyin_collection')})