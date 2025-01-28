import { ChangeEventHandler } from "react";
import { SelectOption } from "./SelectOption";
import { ISelectElement } from "../../interfaces/ISelectElement";

interface SelectElementProps{
    list:ISelectElement[];
    name:string;
    value:string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

/**
 * 
 * @param {ISelectElement[]} list
 * @param {string} name
 * @param {string} value
 * @param {ChangeEventHandler<HTMLSelectElement>} onChange
 * @returns 
 */
export function SelectElement({list, name, value, onChange}:SelectElementProps) {
    let elements = []
    for(let elmt of list){
        elements.push(<SelectOption value={elmt.id} key={elmt.name} text={elmt.name} />);
    }

    return <select name={name} value={value} onChange={onChange}>
        <option value="">--Choose an option--</option>
        {elements}
    </select>
}