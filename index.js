require('mapbox.js'); // <-- auto-attaches to window.L

// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoiZW52aW50YWdlIiwiYSI6Inh6U0p2bkEifQ.p6VrrwOc_w0Ij-iTj7Zz8A';
// Create a map in the div #map
L.mapbox.map('map', 'envintage.94e53880')
  .setView([-41.28646, 174.77624], 14);
