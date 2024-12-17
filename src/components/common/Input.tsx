interface InputProps {
    type?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: (value: string) => void
}


/**
 * @param {string} type
 * @param {string} placeholder 
 * @param {string} value 
 * @param {string} className 
 * @param {string} onChange 
 */
export function Input({type, placeholder, value, className, onChange}: InputProps){
    return <div>
        <input 
            type={type}
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange!(e.target.value)} />
    </div>
}