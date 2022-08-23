import { useState } from "react";

/**
 * @function useCounter
 * @description Creates a counter hook.
 * @param {number} initalValue - Initial value for the counter if its different to 0.
 * @returns {Object} An object containing the current count, and functions to increment or decrement the count.
 */
export default function useCounter(initalValue = 0) {
    const [count, setCount] = useState(initalValue);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => {
        setCount(prevCount => {
            if (prevCount > 0) return prevCount - 1;
        })
    }

    return {count, increment, decrement};
}