
interface ButtonProps {
    type?: 'submit' | 'reset' | 'button',
    value?: string,
    className?: string
}

/**
 * @param {string} type
 * @param {string} value 
 * @param {string} className 
 */
export function Button({type, value, className}: ButtonProps){
    return <div>
        <button 
            type={type}
            value={value}
            className={className} />
    </div>
}