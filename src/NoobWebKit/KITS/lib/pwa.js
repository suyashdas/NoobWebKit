// UpUp Plugin
 UpUp.start({
  'content-url': '/offline.html',
  'service-worker-url': 'KITS/lib/upup/upup.sw.min.js'
});

// Service Worker Register 
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/KITS/lib/upup/upup.sw.min.js").then(res => console.log(`This Website Made With Using NoobWebKit, which is created by \n\t Suyash R.D. (Founder of GamerNity)`)).catch(err => console.log("service worker not registered", err));
  });
}