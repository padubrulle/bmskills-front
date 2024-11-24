import '../style/_admininput.css'
/**
 * @param {string} placeholder 
 */
export function FormTextArea({text, fieldName, onChange}){
    return <div style={{paddingTop: "3%"}}>
        <div className="textarea-group">
            <textarea className="textarea" name={fieldName} onChange={onChange}/>
            <label className="label" htmlFor={fieldName}>{text}</label>
        </div>
    </div>
}