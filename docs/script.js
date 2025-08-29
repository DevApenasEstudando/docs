document.addEventListener('DOMContentLoaded', () => {
  console.log("App de Programação carregado!");

  // 🔧 Registra o Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado!"))
      .catch(err => console.error("Erro ao registrar o Service Worker:", err));
  }

  // 📲 Instalação do app (PWA)
  let deferredPrompt;
  const btnInstalar = document.getElementById('btnInstalar');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnInstalar.style.display = 'block';

    btnInstalar.addEventListener('click', () => {
      btnInstalar.style.display = 'none';
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou instalar o app');
        } else {
          console.log('Usuário recusou a instalação');
        }
        deferredPrompt = null;
      });
    });
  });
});

