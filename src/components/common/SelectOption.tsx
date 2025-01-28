interface SelectOptionProps{
    value:string;
    key:string;
    text:string;
}

/**
 * @param {string} value
 * @param {string} key 
 * @param {string} text 
 * @returns 
 */
export function SelectOption({value, key, text}: SelectOptionProps){
    return <option value={value} key={key}>{text}</option>
}