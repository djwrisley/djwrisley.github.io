(function() {
  var scale = {
    a: function(a, f, g, h) {
      if (f.css) {
        a = a.css(f.css);
      }
      return a;
    }
  };
  
  // Fix for responsive scaling on mobile devices
  var metas = document.getElementsByTagName('meta');
  var i = 0;
  
  if (navigator.userAgent.match(/iPhone/i)) {
    for (i = 0; i < metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    }
    document.addEventListener("gesturestart", gestureStart, false);
  }
  
  function gestureStart() {
    for (i = 0; i < metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
      }
    }
  }
})();
