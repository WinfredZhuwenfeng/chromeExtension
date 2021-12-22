chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // 接口配置
  async function postData(url, data) {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "X-Access-Token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzkxMTYwNzcsInVzZXJuYW1lIjoiYWRtaW4ifQ.rawb6y3WKgG0iyqjcFruGmk4YZzdxzEIk0EQ5j2cBp8",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }
  // 全局变量
  console.info(request, sender, sendResponse);
  // let lastMessageUrl = "";
  // let temp = request.message;
  // chrome.storage.local.get(['douyin_collection'], function(res){
  //   lastMessageUrl = res
  // });
  if (request.action === "insertJS") {
    // async function insert() {
    //   let tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    //   const excuteScript = "js/business/" + request.message + ".js";
    //   console.info(excuteScript);
    //   console.info(tabs);
    //   chrome.scripting.executeScript({
    //     target: { tabId: tabs[0].id },
    //     files: [excuteScript],
    //   });
    // }
    // insert()
    // const getCurrentTab = async ()=>{
    //   let queryOption = {active: true, currentWindow: true}
    //   let [tab] = await chrome.tab.query(queryOption)
    //   return tab
    // }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const excuteScript = "js/business/" + request.message + ".js";
      console.info(tabs);
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: [excuteScript],
      });
    });
  } else if (request.action === "toEnd") {
    console.info("toend", request.message);
    sendResponse(request.message[request.message.length-1].url)
    // console.info("postDataObj", postDataObj);
    // console.info("toend", lastMessageUrl);
    // let lastMessageUrl = "";
    // 存最后一个url，作为截断点
    // console.info("1", lastMessageUrl);
    // if(lastMessageUrl&&request.message.length) {      
    //   lastMessageUrl = request.message[request.message.length - 1].url;
    //   let urlArry = request.message.map((item) => item.url);
    //   let sliceIndex = urlArry.findIndex((item) => item === lastMessageUrl);
    //   // 要传递的数据
    //   let postDataObj = [];
    //   if (lastMessageUrl && sliceIndex > -1) {
    //     postDataObj = request.message.slice(sliceIndex);
    //     // if (sliceIndex > -1) {
    //     //   postDataObj = request.message.slice(sliceIndex);
    //     // } else {
    //     //   postDataObj = request.message;
    //     // }
    //   }
    // }else if(!lastMessageUrl&&request.message.length){
    //     lastMessageUrl = request.message[request.message.length - 1].url;
    //     postDataObj = request.message;
    // }
    // chrome.storage.sync.set({douyin_collection: lastMessageUrl}, function() {console.info(lastMessageUrl)})
    // console.info("2", lastMessageUrl);
    // console.info("postDataObj", postDataObj);
    // postData(
    //   "http://192.168.0.206:8089/admin/online/cgform/api/form/75160b3284864c08a1394fbb38918149?tabletype=1",
    //   request.message
    // ).then(res=>{
    //   console.info(res)
    //   let notcationItemOption = {
    //     message: res.message,
    //     type: "basic",
    //     title: "采集接口返回",
    //     iconUrl: "../images/get_started16.png",
    //   };
    //   chrome.notifications.create(notcationItemOption)
    // });
  }
  // if(request.action==='toCollect') {
  //   chrome.scripting.executeScript(tabs[0].id, {
  //     script: [excuteScript],
  //   });
  // }
});
// chrome.action.onClicked.addListener((tab) => {
//   const excuteScript = "js/" + request.message + ".js";
//   // const tabId = getTabId();
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: [excuteScript],
//   });
// });
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
// });
