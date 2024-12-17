import { Methodbar } from "../../../components/navbar/admin/methodbar"
import { AdminNavbar } from "../../../components/navbar/admin/navbar"


export function AdminDashboard() {
    document.title = 'Dashboard admin'
    return <div>
        <AdminNavbar/>
        <Methodbar />
    </div>
}

export default AdminDashboard