// Instalando o Service Worker
self.addEventListener("install", event => {
  console.log("Service Worker instalado!");
  event.waitUntil(
    caches.open("meuApp-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "css.html",
        "style.css",
        "script.js",
        "html.html",
        "anotacoes.html",
        "projetos.html"
      ]);
    })
  );
});

// Ativando o Service Worker
self.addEventListener("activate", event => {
  console.log("Service Worker ativado!");
});

// Interceptando requisições (offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
