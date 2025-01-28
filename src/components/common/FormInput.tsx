import { ChangeEventHandler } from "react"

interface FormInputProps{
    fieldName: string;
    text: string;
    type: string;
    required?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * @param {string} fieldName 
 * @param {string} text 
 * @param {string} type 
 * @param {boolean} required 
 * @param {ChangeEventHandler<HTMLInputElement>} onChange 
 */
export function FormInput({fieldName, text, type, required=false, onChange}: FormInputProps){
    return <div style={{paddingTop: "3%"}}>
    <div className="input-group">
            <input className="input" 
            required={required} 
            type={type} 
            name={fieldName}
            onChange={onChange}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
    </div>
}