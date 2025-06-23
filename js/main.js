if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js")
      .then(res => console.log("Service Worker registered"))
      .catch(err => console.log("SW registration failed", err));
  });
}