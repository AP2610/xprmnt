/**
 * @public setCookie
 * @param {string} cookieName - The cookie name
 * @param {string} cookieValue - The cookie value
 * @param {string} domain - The domain
 * @param {string} expirationDays - The expiration in days
 */
function setCookie(cookieName, cookieValue, domain, expirationDays = 30) {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const domainAndPath = `${domain ? `domain=${domain};` : ''}path=/; secure; sameSite=None`;
    const cookieString = `${cookieName}=${cookieValue};${expires};${domainAndPath}`;

    document.cookie = cookieString;
}

/**
 * @public getCookie
 * @param {string} cookieName - The cookie name
 * @return {string|null} The value of the cookie || null
 */
function getCookie(cookieName) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

export { setCookie, getCookie };
