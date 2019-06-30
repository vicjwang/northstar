

chrome.runtime.onInstalled.addListene3r(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("the color is green");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStageMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]),
  });
});
