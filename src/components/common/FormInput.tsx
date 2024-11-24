/**
 * @param {string} placeholder 
 */
export function FormInput({fieldName, text, type, required=false, onChange}){
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