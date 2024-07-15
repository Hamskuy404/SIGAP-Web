import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from './icon.png'; // Adjust the path to your icon image

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([-2.21, 140.66], 5);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Define the custom icon
      const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [32, 32], // Adjust the size as needed
        iconAnchor: [16, 32], // Adjust the anchor point
        popupAnchor: [0, -32] // Adjust the popup anchor point
      });

      // Ensure the icon image loads correctly
      const image = new Image();
      image.src = iconUrl;
      image.onload = () => {
        // Fetch the earthquake data from the API
        fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json')
          .then(response => response.json())
          .then(data => {
            const earthquakes = data.Infogempa.gempa;

            earthquakes.forEach(gempa => {
              // Extract coordinates
              const coordinates = gempa.Coordinates.split(',').map(Number);

              // Create a marker with the custom icon
              const marker = L.marker([coordinates[0], coordinates[1]], { icon: customIcon }).addTo(map);

              // Bind a popup with the earthquake information
              marker.bindPopup(`
                <strong>${gempa.Wilayah}</strong><br/>
                Magnitude: ${gempa.Magnitude}<br/>
                Kedalaman: ${gempa.Kedalaman}<br/>
                Potensi: ${gempa.Potensi}<br/>
                Tanggal: ${gempa.Tanggal}<br/>
                Jam: ${gempa.Jam}
              `);
            });
          })
          .catch(error => {
            console.error('Error fetching earthquake data:', error);
          });
      };

      image.onerror = () => {
        console.error('Error loading custom icon image.');
      };

      // Cleanup function to remove the map instance
      return () => {
        if (map) {
          map.remove();
        }
      };
    }
  }, []);

  return (
    <div ref={mapRef} style={{ height: '400px' }}></div>
  );
};

export default MapComponent;
