document.addEventListener('DOMContentLoaded', function() {
  var getTitleBtn = document.getElementById('getTitleBtn');
  var currentTitle = document.getElementById('currentTitle');

  getTitleBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      currentTitle.textContent = tab.title;
    });
  });
});
