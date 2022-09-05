function initMap(): void {
  const dth = { lat: 48.6863399, lng: 6.1715808 };
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 15,
      center: dth,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: dth,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
