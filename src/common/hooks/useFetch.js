// Hooks
import { useState } from 'react';

/**
 * @function useFetch
 * @description Custom hook to make fetch get and post requests. Also handles loading state.
 * @param {string} baseUrl - The base URL of the API.
 * @returns {Object} - An object containing get and post methods, and loading state.
 */
export default function useFetch(baseUrl) {
    const [isLoading, setIsLoading] = useState(false);

    if (!baseUrl) {
        console.warn('Please provide a baseUrl');
        return;
    }

    /**
     * @function request
     * @description fetches the endpoint passed in. Defaults to GET. If body is passed, a POST request will be made.
     * @param {string} endpoint - The endpoint to fetch.
     * @param {Object} body - In case of a POST request, the second parameter of body must be passed in.
     */
    const request = (endpoint, body = null) => {
        const fetchOptions = {
            method: body ? 'POST' : 'GET'
        };

        // In case of post request, stringify the body and add headers.
        if (body) {
            fetchOptions.headers = {
                'Content-Type': 'application/json'
            }
            fetchOptions.body = JSON.stringify(body);
        }

        return new Promise((resolve, reject) => {
            setIsLoading(true); // Start the loader.

            (async () => {
                try {
                    const response = await fetch(baseUrl + endpoint, fetchOptions);
                    if (!response.ok) throw new Error(`The request failed with the status ${response.statusText}`)

                    const data = await response.json();
                    if (!data) reject(data);

                    resolve(data);
                } catch(error) {
                    reject(error);
                } finally {
                    setIsLoading(false);
                }
            })();
        })
    }

    // If the hook is being used for GET and POST in the same component, alias the request to getRequest and postRequest, same for isLoading.
    return { request, isLoading };
}