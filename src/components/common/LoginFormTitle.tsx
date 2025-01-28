import '../style/_loginFormTitle.css'

interface LoginFormTitleProps{
    title:string;
}

/**
 * @param {string} title
 */
export function LoginFormTitle({title}:LoginFormTitleProps){
    return <>
        <h1>{title}</h1>
    </>
}