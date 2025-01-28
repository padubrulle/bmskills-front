import { LoginButton } from "../../admin/LoginButton";
import { LoginFormInput } from "../../admin/LoginFormInput";
import { LoginFormTitle } from "../../components/common/LoginFormTitle";
import '../../components/style/_login.css'


export function AdminLoginPage() {

    return <div className="adminForm">
        <form>
            <LoginFormTitle title="Connexion Admin" />
            <LoginFormInput fieldName="email" type="text" text="Email" />
            <LoginFormInput fieldName="password" type="password" text="password" />
            <LoginButton />
        </form>
    </div>
    
}

