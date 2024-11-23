import { AdminButtonLogin } from "../admin/AdminButton";
import { AdminInput } from "../admin/AdminInput";
import '../style/_admin.css'

export function AdminLoginPage() {

    return <form>
        <AdminInput fieldName="email" type="text" text="Email" />
        <div style={{paddingTop: "10%"}}>
        <AdminInput fieldName="password" type="password" text="password" />
        </div>
        <div style={{paddingTop: "10%"}}>
        <AdminButtonLogin />
        </div>
    </form>
}