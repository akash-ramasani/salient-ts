import React from 'react';
mapboxgl.accessToken = 'pk.eyJ1Ijoid3RjLXJzZ2lzIiwiYSI6ImNsdnhwcGp6OTIwMHMybG55M3p2c29rNHoifQ.f5Vg3kgGcCjKs32NuY1tFQ';
export function Map() {
    return (
    <div id="map"></div>
	
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-100.486052, 37.830348],
        zoom: 2
    });
    let hoveredPolygonId = null;

    map.on('load', () => {
        map.addSource('states', {
            'type': 'geojson',
            'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
        });

        map.addLayer({
            'id': 'state-fills',
            'type': 'fill',
            'source': 'states',
            'layout': {},
            'paint': {
                'fill-color': '#627BC1',
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    0.5
                ]
            }
        });

        map.addLayer({
            'id': 'state-borders',
            'type': 'line',
            'source': 'states',
            'layout': {},
            'paint': {
                'line-color': '#627BC1',
                'line-width': 2
            }
        });

        map.on('mousemove', 'state-fills', (e) => {
            if (e.features.length > 0) {
                if (hoveredPolygonId !== null) {
                    map.setFeatureState(
                        { source: 'states', id: hoveredPolygonId },
                        { hover: false }
                    );
                }
                hoveredPolygonId = e.features[0].id;
                map.setFeatureState(
                    { source: 'states', id: hoveredPolygonId },
                    { hover: true }
                );
            }
        });

        map.on('mouseleave', 'state-fills', () => {
            if (hoveredPolygonId !== null) {
                map.setFeatureState(
                    { source: 'states', id: hoveredPolygonId },
                    { hover: false }
                );
            }
            hoveredPolygonId = null;
        });
    });
    )
}