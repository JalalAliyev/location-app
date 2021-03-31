import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './map.style.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFsYWxhbGl5ZXYiLCJhIjoiY2ttbGtsYTN2MDhpNzJwbjN6Nms5b2h3ayJ9.wPsCRRyNYdHwgSgowdMVbA';

const Map = ({ latUser, lngUser, zoomUser }) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(lngUser);
  const [lat, setLat] = useState(latUser);
  const [zoom, setZoom] = useState(zoomUser);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);
  return <div className="map-container-child" ref={mapContainerRef} />;
};

export default Map;
