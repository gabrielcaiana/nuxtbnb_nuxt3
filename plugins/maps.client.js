export default defineNuxtPlugin((nuxtApp) => {
  const { googleApiKey } = useRuntimeConfig();
  let mapLoaded = false;
  let mapWaiting = null;

  // callback para inicializar o mapa e verificar se os parametros estão disponíveis
  const initMap = () => {
    mapLoaded = true;
    if (mapWaiting) {
      const { canvas, lat, lng } = mapWaiting;
      renderMap(canvas, lat, lng);
      mapWaiting = null;
    }
  };

  // cria e insere o script no DOM
  (function () {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initMap&v=weekly`;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  })();

  // realiza as configurações de exibição do mapa
  const renderMap = (canvas, lat, lng) => {
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

  // recebe os parametros do canvas e lat e lng para carregar o mapa
  const showMap = (canvas, lat, lng) => {
    if (mapLoaded) renderMap(canvas, lat, lng);
    else mapWaiting = { canvas, lat, lng };
  };

  // exporta a função para o aplicativo nuxt
  nuxtApp.provide("showMap", (canvas, lat, lng) => showMap(canvas, lat, lng));
});
