// 'use strict';

// /**
//  * addEvent - Will add an event listener to an element inside a parent
//  *
//  * @param {string} parent - The parent element
//  * @param {string} passedEvent - The event
//  * @param {string} selector - The targeted element
//  * @param {function} handler - The handler
//  */
// function addEvent(parent, passedEvent, selector, handler) {
//     parent.addEventListener(passedEvent, function fnAddEvent(event) {
//         // If the clicked element matches the selector, or is a child of the selector
//         if (event.target.matches(`${selector} , ${selector} *`)) {
//             handler.apply(event.target.closest(selector), arguments);
//         }
//     }, false);
// }

// /**
//  * @public documentReady
//  * @param {Function} fn - function to be called after document is done loading.
//  */
// function documentReady(fn) {
//     if (document.readyState !== 'loading') {
//         fn();
//     } else {
//         document.addEventListener('DOMContentLoaded', fn);
//     }
// }

// /**
//  * @public exists
//  * @param {*} selection - The element or nodelist to verify for existence
//  * @returns {boolean} - Boolean value stating the existance of the selection
//  * @description
//  * Verifies existance of a certain element by checking for type, null and length
//  * Usage: use with either querySelector() or querySelectorAll()
//  * querySelector will not have a 'length', e.g. this would return true if other conditions are true
//  * querySelectorAll will have a 'length', e.g. this would return true if all conditions are true
//  */
// function exists(selection) {
//     return typeof selection !== 'undefined' && selection !== null && ('length' in selection ? selection.length > 0 : true);
// }

// /**
//  * @public getPosition
//  * @param {*} element - The element to get the position for
//  * @returns {Object} - An object containing the left and top position of the element
//  *
//  * @description
//  * Will get the position of an element relative to the document
//  */
// function getPosition(element) {
//     let top = element.offsetTop;
//     let left = element.offsetLeft;

//     let currentElement = element;
//     while (currentElement.offsetParent && currentElement.offsetParent !== window) {
//         currentElement = currentElement.offsetParent;
//         top += currentElement.offsetTop;
//         left += currentElement.offsetLeft;
//     }

//     return { left, top };
// }

// /**
//  * isKeyInObject
//  * @param {Object} object - The object
//  * @param {string} key - The key
//  * @returns {boolean} - True or false
//  */
// function isKeyInObject(object, key) {
//     return Object.prototype.hasOwnProperty.call(object, key);
// }

// /**
//  * @memberof util
//  * @param {string} breakpointKey from constants that should match css breakpoint
//  * @param {boolean} [isUp] by default is true since mobile first, reverses condition
//  * @return {boolean} whether window is larger than specified breakpoint
//  */
// // function isMediaBreakpoint(breakpointKey, isUp = true) {
// //     /**
// //      * @constant {Object} breakpoints - Common reusable breakpoints
// //      * @property {string} xs - 0
// //      * @property {string} sm - 768
// //      * @property {string} md - 1024
// //      * @property {string} lg - 1440
// //      * @property {string} xl - 1920
// //      */
// //     const breakpoints = {
// //         xs: '0',
// //         sm: '576',
// //         md: '768',
// //         lg: '992',
// //         xl: '1400'
// //     };

// //     if (!isKeyInObject(breakpoints, breakpointKey)) {
// //         console.error(`fn isMediaBreakpoint: ${breakpointKey} -- does not exist in constants breakpoints object`); // eslint-disable-line
// //     }

// //     const outerWidth = window.innerWidth;
// //     const breakpointValue = parseInt(CONST.breakpoints[breakpointKey], 10);

// //     return isUp ? (outerWidth > breakpointValue) : (outerWidth < (breakpointValue - 1));
// // }

// /**
//  * @memberof util
//  * @return {Object} An object containing the name and value of the current breakpoint
//  */
// // function getCurrentBreakpoint() {
// //     const breakpoints = CONST.breakpoints;
// //     const screenSize = document.documentElement.clientWidth;
// //     const currentBreakpoint = [...Object.keys(breakpoints)].reverse().find(key => screenSize > breakpoints[key]);

// //     return {
// //         name: currentBreakpoint,
// //         value: breakpoints[currentBreakpoint]
// //     };
// // }

// /**
//  * @memberof util
//  * @return {number} a unique number
//  */
// function generateUniqueNumber() {
//     return performance.now().toString().replace('.', 0);
// }

// /**
//  * @public empty
//  * @param {*} element - The element to remove child nodes from
//  * @description
//  * Empties a given element completely while the given element has child nodes.
//  * Plain strings are also considered child nodes and are thus also removed.
//  */
// function removeChildNodes(element) {
//     while (element.hasChildNodes()) {
//         element.removeChild(element.lastChild);
//     }
// }

// /**
//  * @public tryParseJSON
//  * @param {string} string - The possible JON string
//  * @returns {Object} - Either the JSON object or an empty object for consistent return
//  * @description
//  * Copied from https://stackoverflow.com/a/20392392
//  */
// function tryParseJSON(string) {
//     try {
//         const o = JSON.parse(string);

//         // Handle non-exception-throwing cases:
//         // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
//         // but... JSON.parse(null) returns null, and typeof null === "object",
//         // so we must check for that, too. Thankfully, null is falsey, so this suffices:
//         if (o && typeof o === 'object') {
//             return o;
//         }
//     } catch (e) {} // eslint-disable-line no-empty

//     return {};
// }

// /**
//  * @function isIOS
//  * @public
//  * @description returns a boolean to determine whether a device's OS is IOS or not
//  * @returns {boolean} whether the device OS is IOS or not
//  */
// function isIOS() {
//     return (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;
// }

// /**
//  * @public scrollTo
//  * @param {Object} data - The optional object containing the top & left positions to scroll to
//  */
// function scrollTo(data) {
//     const position = data || {
//         top: 0,
//         left: 0
//     };

//     const stickyHeader = document.querySelector('.page-header');
//     const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
//     const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
//     let positionTop = position.top;

//     if (headerHeight > 0) {
//         positionTop = position.top - headerHeight - 15; // Removing an additional 15px to put some space between the sticky site header and the element
//     }

//     if (supportsNativeSmoothScroll) {
//         document.documentElement.scrollTo({
//             top: positionTop,
//             left: position.left,
//             behavior: 'smooth'
//         });
//     } else {
//         document.documentElement.scrollTop = positionTop;
//     }
// }

// /**
//      * @function toggleButtonState
//      * @description Enables or disabled the button passed in based on the value of the second parameter.
//      * @param {HTMLElement} button - A button element to be enabled or disabled.
//      * @param {boolean} enable - True for enable and false for disable.
//      */
// function toggleButtonState(button, enable) {
//     if (enable) {
//         button.classList.remove('disabled');
//         button.removeAttribute('disabled');
//     } else {
//         button.classList.add('disabled');
//         button.setAttribute('disabled', 'disabled');
//     }
// }

// /**
//  * @function removeAccentCharacters
//  * @description Removes a accents from a string.
//  * @param {string} string - The string from which we want to remove accents.
//  * @returns {string} The string without accents.
//  */
// function removeAccentCharacters(string) {
//     return string.normalize('NFD').replace(/\p{Diacritic}/gu, '');
// }

// export {
//     addEvent,
//     documentReady,
//     exists,
//     generateUniqueNumber,
//     getCurrentBreakpoint,
//     getPosition,
//     isIOS,
//     isKeyInObject,
//     isMediaBreakpoint,
//     removeChildNodes,
//     scrollTo,
//     tryParseJSON,
//     toggleButtonState,
//     removeAccentCharacters
// };
