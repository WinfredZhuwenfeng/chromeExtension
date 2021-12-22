$(function() {
  // $("#toCollect").click(function(){
  //   var name = $("#page").val()
  //   // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //   //   chrome.tabs.sendMessage(tabs[0].id, {action: 'toCollect', message: name})
  //   // })
  //   chrome.runtime.sendMessage({action: "insertJS",message: name})
  // })
  $("#toCollect").click(async ()=> {
    let tab = await chrome.tabs.query({
      active: true,
      currentWindow: true
    })
    var name = $("#page").val();
    console.info(tab, name)
    chrome.runtime.sendMessage({ action: "insertJS", message: name });
  })
})
// chrome.action.onClicked.addListener(function (tab) {
//   chrome.action.setTitle({ tabId: tab.id, title: "You are on tab:" + tab.id });
// });
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   chrome.tabs.sendMessage(
//     tabs[0].id,
//     { greeting: "hello" },
//     function (response) {
//       console.log(response.farewell);
//     }
//   );
// });