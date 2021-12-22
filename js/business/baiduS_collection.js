titleArr = new Array();
for (var i = 0; i < document.querySelectorAll("h3.t").length; i++) {
  titleArr.push(document.querySelectorAll("h3.t")[i].textContent);
}
chrome.runtime.sendMessage({ action: "toEnd",message: titleArr }, function (response) {
  console.info(response);
  console.info(titleArr);
});
