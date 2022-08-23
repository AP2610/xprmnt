export default class HtmlUtilities {
    /**
     * @function containsHTML
     * @description Checks if the input string parameter contains HTML.
     * @param {string} input - the input to check
     */
    containsHTML = input => /<\/?[a-z][\s\S]*>/i.test(input);
    
    /**
     * @function stringToHTML
     * @description Converts a string into HTML.
     * @param {string} htmlString - The template string
     * @returns {html} The innerHTML from the created document.
     */
    stringToHTML(htmlString) {
        const parser = new DOMParser();
        const document = parser.parseFromString(htmlString, 'text/html');
        return document.body.innerHTML;
    }

    /**
     * @function createNewElement
     * @description creates a new HTML element based on parameters passed in.
     * @param {string} type - a string determining the type of element to create. For example: 'p' or 'li'.
     * @param {string} classes - a space separated string of classes to be added to the created element.
     * @param {string} text - the text to insert into the element being created, this text could contain HTML.
     * @returns {HTMLElement} the newly created element.
     */
    createNewElement(type, classes = null, text = null) {
        const element = document.createElement(type);
        if (classes) element.className = classes;

        if (text) {
            const stringHasHTML = this.containsHTML(text);
            const contentInsertionType = stringHasHTML ? 'innerHTML' : 'textContent'; // set the insertion type based on having HTML or not
            const newElementContent = stringHasHTML ? this.stringToHTML(text) : text; // convert the string to html if it contains HTML
            element[contentInsertionType] = newElementContent;
        }

        return element;
    }
}