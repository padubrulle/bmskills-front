import { SelectOption } from "./SelectOption";


export function SelectElement({list, name, value, onChange}) {
    let elements = []
    for(let elmt of list){
        elements.push(<SelectOption value={elmt.id} key={elmt.name} text={elmt.name} />);
    }

    return <select name={name} value={value} onChange={onChange}>
        <option value="">Choose a category</option>
        {elements}
    </select>
}