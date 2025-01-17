import '../components/style/_loginFormInput.css'

export function LoginFormInput({fieldName, text, type, onChange}){
    return <div className="input-group">
            <input className="input" required type={type} name={fieldName} onChange={onChange}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
}