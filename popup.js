console.log("from foreground");

/*const first = document.createElement('button');
first.innerText = "Set Data";
first.id = "first";
const second = document.createElement('button');
second.innerText = "Shoutout to backend";
second.id = "second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);*/

/*first.addEventListener('click', () => {
  //chrome.storage.sync   //sync saves data accorss devices if you sign in on another machine
  chrome.storage.local.set({"password": "123"});
  console.log("I SET DATA");
});

second.addEventListener('click', () => {
  //sendmessage init by frontend to backend
  chrome.runtime.sendMessage({message: 'yo check the storage'}, res => console.log(res));
  console.log('Isentthemessage');
})*/
//const orfloaded = new XMLHttpRequest();
//const loadedUrl='https://sport.orf.at/stories/3076970/';
//orfloaded.open("Get", loadedUrl);
//if(orfloaded.readyState === '4'){
  //console.log(orfloaded.readyState);
  
  //}else{
  //  console.log("readystate is not 4");
  //}
document.querySelector("#ds-more").click()
//window.setTimeout(function(), milliseconds);

/*if(){
  console.log("waiting 0.5s");
  wait(0.5);
  if(document.querySelector("#ds-accept-settings").click()){
  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHSSSSSSSSSSSSSSDDDSDASDAWEFLIJAHJLFIO");
  }else{
    console.log("nothing happend");
  }
}

*/

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  console.log(request);
  if(request.message==="you are on sport.orf.at"){
    console.log(request.message);
    const Http = new XMLHttpRequest();
    //const Initiator ="main.js?v=2021050411-310:827";
    const url='https://cookiedispenser.orf.at/oon-ds-banner-c/short/closed';
    Http.open("GET", url);
    
    Http.send();
      
    Http.onreadystatechange = (e) => {
          console.log("get request send to cookiedispenser.orf.at");
          console.log(Http.responseText);
    } 
    const oondsads = new XMLHttpRequest();
    const oondsadsURL='https://cookiedispenser.orf.at/oon-ds-ads/true';
    oondsads.open("GET",oondsadsURL);
    oondsads.send();

    oondsads.onreadystatechange = (e) => {
      console.log(oondsads.responseText);
    }
  }
  
});
/*let changeCookie = document.getElementById("changeCookies");

function change() {
    console.log("The content changed ... ");
}

changeCookie.addEventListener("click", change);

//add some functions for Button here

chrome.runtime.sendMessage('get-user-data', (response) => {
  // 3. Got an asynchronous response with the data from the background
  console.log('received user data', response);
});

chrome.cookies.onChanged.addListener(function(info) {
  chrome.extension.getBackgroundPage().console.log("onChanged" + JSON.stringify(info));
});*/

