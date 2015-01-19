function addEvent(elem, eventType, handler) {
  if (elem.addEventListener) {
    elem.addEventListener (eventType, handler, false);
  } else if (elem.attachEvent) {
    elem.attachEvent ('on' + eventType, handler);
  }
}

// Revisit the onload thing
window.onload = function() {
  addEvent(document.getElementById("startReadFast"), "click", function(e) {
    var textData = document.getElementById("textData").value
      , screenEl = document.getElementById("screen")
      , words = textData.split(/[\s\n]/)
      , intervalInit = parseInt(document.getElementById("interval").value, 10) || 200
      , interval = intervalInit;

    if (textData.length > 0)
      var index = 0;
      var timer = setInterval(function(){
        if (index >= (words.length - 1 )) clearInterval(timer);
        var word = words[index];
        screenEl.innerText = words[index];
        ++index;
      }, interval);
  });
};
