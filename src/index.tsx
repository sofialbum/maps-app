import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import maplibregl from 'maplibre-gl';

if ( !navigator.geolocation ) {
  alert( 'Tu navegador no soporta geolocalización' );
  throw new Error('Tu navegador no soporta geolocalización');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


