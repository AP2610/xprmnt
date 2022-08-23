'use stict';

/**
 * @private splitUpUrl
 * @param {string} url - The url to split up
 * @returns {Object} values
 *
 * @description
 * Will return an object with different parts of the url
 */
export function splitUpUrl(url) {
    if (!url.includes('?')) return {};

    let hash;
    let paramUrl = url.split('?').at(1);

    // if there is a hash at the end, store the hash
    if (paramUrl.includes('#')) {
        hash = paramUrl.split('#').at(1);
        paramUrl = paramUrl.split('#').at(0);
    }

    return {
        domain: url.split('?').at(0),
        params: paramUrl.split('&'),
        hash: hash
    };
}

/**
 * @public removeParamFromURL
 * @param {string} url - The url from which the parameter will be removed
 * @param {string} name - The name of the parameter that will be removed from url
 * @returns {string} url
 *
 * @description
 * remove the parameter and its value from the given url and returns the
 * changed url
 */
export function removeParamFromURL(url, name) {
    if (!url.includes('?') || !url.includes(`${name}=`)) return url;

    const urlValues = splitUpUrl(url);
    const newParams = urlValues.params.filter(param => param.split('=').at(0) !== name);

    return `${urlValues.domain}?${newParams.join('&')}${(urlValues.hash ? `#${urlValues.hash}` : '')}`;
}

/**
 * @public getParamFromURL
 * @param {string} url - The url from which the parameter will be retrieved
 * @param {string} name - The name of the parameter that will be retrieved from url
 * @returns {string} The value of the parameter
 *
 * @description
 * remove the parameter and its value from the given url and returns the
 * changed url
 */
export function getParamFromURL(url, name) {
    if (!url.includes('?') || !url.includes(`${name}=`)) return url;

    const urlValues = splitUpUrl(url);
    const nameMatch = urlValues.params.find(item => item.includes(`${name}=`));

    return nameMatch && nameMatch.split('=').at(1);
}

/**
 * @public appendParamToURL
 * @param {string} url - The url to which the parameter will be added
 * @param {string} name - The name of the parameter
 * @param {string} value the value of the parameter
 * @returns {string} url
 *
 * @description
 * appends the parameter with the given name and value to the given url
 * and returns the changed url
 */
export function appendParamToURL(url, name, value) {
    let newURL = url;
    // remove if the param already exists
    if (url.includes(`${name}=`)) {
        newURL = removeParamFromURL(url, name);
    }
    const separator = newURL.includes('?') ? '&' : '?';
    return `${newURL}${separator}${name}=${encodeURIComponent(value)}`;
}

/**
 * @public appendCsrfToUrl
 * @description Takes a URL and adds a CSRF token to it
 * @param {string} url - The URL to append the CSRF token on
 * @returns {string} The URL with the CSRF token appended
 */
export function appendCsrfToUrl(url) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${window.csrf.tokenName}=${window.csrf.token}`;
}

/**
 * @public removeHash
 * @description Will remove the hash from the url
 */
export function removeHash() {
    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
}
