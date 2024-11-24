/**
 * @param {string} value
 * @param {string} key 
 * @param {string} text 
 * @returns 
 */
export function SelectOption({value, key, text}){
    return <option value={value} key={key}>{text}</option>
}