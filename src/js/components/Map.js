import mapboxGl from 'mapbox-gl';
import { useEffect, useState } from 'react';

const defaultStores = [
    { 
        id: 'central',
        name: 'Central Station',
        location: [12.567898, 55.67583] 
    },
    { 
        id: 'norrebro', 
        name: 'Norrebro street',
        location: [12.553806, 55.699299] 
    },
    { 
        id: 'airport',
        name: 'CPH Airport',
        location: [12.650784, 55.618042] 
    },
];

/**
 * @function Map
 * @description Renders a map from mapBox.
 * @param {Object} props - received from parent component.
 * @returns {JSX} - JSX for the map.
 */
export default function Map(props) {
    const [marker, setMarker] = useState();
    const selectOptions =  props.options || defaultStores;

    mapboxGl.accessToken = 'pk.eyJ1IjoiYXJqdW5wdXJpIiwiYSI6ImNsNXRoNHB4ZTBsajAzam14a2QyN2EweGgifQ.q9kBpTpuPR4_Bu5h9mwabQ';

    const optionsList = selectOptions.map(option => <option key={option.id} value={option.id}>{option.name}</option>)
    
    useEffect(() => {
        // Create map.
        const map = new mapboxGl.Map({ // eslint-disable-line no-unused-vars
            container: 'map', // Map selector.
            style: 'mapbox://styles/mapbox/dark-v10', // Dark mode style.
            center: [12.567898, 55.67583], // Sets the center of the map (long, lat) - Copenhagen.
            zoom: 9,
        });

        // Create marker, set position, add to map.
        const mapMarker = new mapboxGl.Marker()
            .setLngLat([12.567898, 55.67583]) // newLocation coming from props.
            .addTo(map);

        // Set the marker as state variable so its available outside the block to update when location changes.
        setMarker(mapMarker)
    }, []); // Only render the map once.

    // Set new coordinates for marker when store changes.
    const handleSelectChange = (event) => {
        const { target: { value } } = event;
        const selectedOption = selectOptions.find(option => option.id === value);
        marker.setLngLat(selectedOption.location);
    };

    return (
        <>
            <div id="map" className="map"></div>

            <select onChange={handleSelectChange}>
                {optionsList}
            </select>
        </>
    );
}
