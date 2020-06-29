var rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: "www.quora.com", schemes: ["https"] }
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});