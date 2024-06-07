

const loadGoogleMapsApi = require('load-google-maps-api');
const towerIcon = require('../src/assets/location1.png')
const location2 = require('../src/assets/location2.png')
const location3 = require('../src/assets/location3.png')
class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: 'AIzaSyDK4RRMs3RHudNklHgfX9HM5E6Z4xisVhI'
    });
  }

  static createMap(googleMaps, mapElement) {
    const map = new googleMaps.Map(mapElement, {
      center: { lat: 6.925303150686518, lng: 79.86716821930935 },
      zoom: 14
    });


    const locations = [
      { lat: 6.910931003730683, lng: 79.86332867727175, icon: towerIcon, name: 'Nelum Pokuna Theatre' },
      { lat: 6.927572, lng: 79.858459, icon: location2, name: 'Colombo Lotus Tower' },
      { lat: 6.938071934979906, lng: 79.84242114674164, icon: location3, name: 'Fort' }
    ];

    locations.forEach(location => {
      this.createMarker(googleMaps, map, location);
    });

    return map;
  }

  static createMarker(googleMaps, map, location) {
    new googleMaps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      icon: location.icon,
      title: location.name
    });
  }
}

export { Map };


