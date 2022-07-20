import mapboxGl from 'mapbox-gl';
import { useEffect } from 'react';

/**
 * @function Map
 * @description Renders a map from mapBox.
 * @returns {JSX} - JSX for the map.
 */
export default function Map() {
    mapboxGl.accessToken = 'pk.eyJ1IjoiYXJqdW5wdXJpIiwiYSI6ImNsNXRoNHB4ZTBsajAzam14a2QyN2EweGgifQ.q9kBpTpuPR4_Bu5h9mwabQ';

    useEffect(() => {
        const map = new mapboxGl.Map({ // eslint-disable-line no-unused-vars
            container: 'map', // Map selector
            style: 'mapbox://styles/mapbox/dark-v10', // Dark mode style
            center: [12.567898, 55.67583], // Sets the center of the map (long, lat) - Copenhagen
            zoom: 9,
        });
    }, []); // Only render the map once

    return <div id="map" className="map"></div>;
}
