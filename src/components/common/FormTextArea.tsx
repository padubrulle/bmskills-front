import { ChangeEventHandler } from 'react';
import '../style/_loginFormInput.css'

interface FormTextAreaProps{
    text:string;
    fieldName:string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
}


/**
 * @param {string} fieldName 
 * @param {string} text 
 * @param {ChangeEventHandler<HTMLInputElement>} onChange 
 */
export function FormTextArea({text, fieldName, onChange}:FormTextAreaProps){
    return <div style={{paddingTop: "3%"}}>
        <div className="textarea-group">
            <textarea className="textarea" name={fieldName} onChange={onChange}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
    </div>
}