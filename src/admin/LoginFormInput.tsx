import { ChangeEventHandler } from 'react'
import '../components/style/_loginFormInput.css'

interface LoginFormInputProps {
    fieldName: string;
    text: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}


/**
 * @param {string} fieldName 
 * @param {string} text 
 * @param {string} type 
 * @param {ChangeEventHandler<HTMLInputElement>} onChange 
 */
export function LoginFormInput({fieldName, text, type, onChange}: LoginFormInputProps){
    return <div className="input-group">
            <input className="input" required type={type} name={fieldName} onChange={onChange}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
}