export default class UtilityHelper {
    static isEmpty = dataStructure => {
        const length = Array.isArray(dataStructure) ? dataStructure.length : Object.keys(dataStructure).length;
        return length !== 0;
    }
}