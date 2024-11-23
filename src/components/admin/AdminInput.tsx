import '../style/_admininput.css'

export function AdminInput({fieldName, text, type}){
    return <div className="input-group">
            <input className="input" required type={type} name={fieldName}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
}