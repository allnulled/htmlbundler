(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["example2app"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["example2app"] = mod;
  }
})(function() {
window.a = 1;
window.b = 2;
window.c = 3;
});
