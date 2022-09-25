//rng
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//score variable
var counter = 0;
let tabV = null;
var cheetahExists = false;

//gets the currently active tab
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

//creates listener when tab is refreshed or updated
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  //if the tab is loaded then it creates the cheetah
  if (changeInfo.status == 'complete') {
    tabV = tab;
    
    //creates a cheetah between 1 and 5 seconds from tab update
    //if there is not already an existing cheetah
    setTimeout(() => {
      if(!cheetahExists) {
        cheetahExists = true;
        chrome.scripting.executeScript({
          target: {tabId: tabV.id, allFrames: true},
          files: ['picture.js']
        });
      }
    }, 1000 + random(0, 1000));
  }
});