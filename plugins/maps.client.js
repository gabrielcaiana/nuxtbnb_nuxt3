export default defineNuxtPlugin((nuxtApp) => {
  const { googleApiKey } = useRuntimeConfig();
  let isLoaded = false;
  let waiting = [];

  // callback para inicializar o mapa e verificar se os parametros estão disponíveis
  const initGoogleMaps = () => {
    isLoaded = true;
    waiting.forEach((item) => {
      if (typeof item.fn === "function") {
        item.fn(...item.arguments);
      }
    });
    waiting = [];
  };

  // cria e insere o script no DOM
  (function () {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initGoogleMaps&v=weekly`;
    script.async = true;
    window.initGoogleMaps = initGoogleMaps;
    document.head.appendChild(script);
  })();

  // recebe os parametros do canvas e lat e lng para carregar o mapa
  const showMap = (canvas, lat, lng) => {
    if (!isLoaded) {
      waiting.push({
        fn: showMap,
        arguments,
      });
      return;
    }

    // configurações personalizadas
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(lat, lng),
      disableDefaultUI: true,
      zoomControl: true,
    };

    // inicialiaza o mapa
    const map = new window.google.maps.Map(canvas, mapOptions);

    // recebe a posição de lat e lng
    const position = new window.google.maps.LatLng(lat, lng);

    // configura a posição no mapa
    const marker = new window.google.maps.Marker({ position });

    // aplica o marcador no mapa
    marker.setMap(map);
  };

  // exporta a função para o aplicativo nuxt
  nuxtApp.provide("showMap", (canvas, lat, lng) => showMap(canvas, lat, lng));
});
