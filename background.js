const closeZoomWindow = (tab)=>{
    if (tab.url.includes('https://www.twilio.com/en-us/help/sales/thank-you-for-meeting')|| tab.url.includes('https://twilio.zoom.us/j/')) {
        chrome.tabs.remove(tab.id)
    }
}

const closeZoomWindowProxy = (tabId,changeInfo,tab)=>{
    closeZoomWindow(tab)
}
chrome.tabs.onCreated.addListener(closeZoomWindow)
chrome.tabs.onUpdated.addListener(closeZoomWindowProxy)