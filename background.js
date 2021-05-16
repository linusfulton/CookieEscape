/*domain: ".kurier.at"
expirationDate: 1621110946
hostOnly: false
httpOnly: false
name: "__io_session_id"
path: "/"
sameSite: "unspecified"
secure: false
session: false
storeId: "0"
value: "55a705ece.c4667151a_1621109146009"*/
/*let cookieinfo;
chrome.cookies.onChanged.addListener(function(info) {
    if(info.cookie.domain === ".kurier.at"){  //check only for the kurier.at domain cookies
       console.log(info);
       cookieinfo = info.cookie;
       chrome.scripting.executeScript({
         target:{}
       })
       //const obj = JSON.parse(info.cookie);
       //kurierCookies += kurierCookies.concat(info.cookie);
    }
    console.log("alle kurier cookies");
   //console.log(kurierCookies.toString());
  });*/


let active_tab_id =0;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {   //onactivated only triggers when clicking on the tab
  chrome.tabs.get(tabId, current_tab_info => {
    active_tab_id = tabId;
    console.log(current_tab_info.url);
    if (/^https:\/\/sport.orf.at/.test(current_tab_info.url)) {
      //send message from backend to frontend
      chrome.tabs.sendMessage(active_tab_id, {message:'you are on sport.orf.at'})
      //chrome.tabs.sendMessage(active_tab_id, {message: cookieinfo.cookie})
      chrome.scripting.executeScript(
        {
        target: {tabId: tabId},
        files: ['popup.js'],
       },
        () => console.log('popup.js was executed')) //executeScript(tabnumber, file)
    }
  });
});

//chrome.runtime.onMessage.addListener((request, sender, sendRepsonse) => {
  //check if message = the message i should get and response
    //chrome.tabs.sendMessage(active_tab_id, {message:'you are on www.kurier.at'})
    //sendRepsonse({message: 'yo i got your message'});
    //chrome.storage.local.get("password", value => {
    //  console.log(value);
    //})
//})

/*
//console.log(chrome.extension.popup);
var views = chrome.extension.getViews({
    type: "popup"
});
for (var i = 0; i < views.length; i++) {
    views[i].document.getElementById('x').innerHTML = "My Custom Value";
}
/*
const user = {
  username: 'demo-user'
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-user-data') {
    sendResponse(user);
  }
});*/

//chrome.tabs.executeScript(null, {file: 'popup.js'}, () => console.log('i injected'));