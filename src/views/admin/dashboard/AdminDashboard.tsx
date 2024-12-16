import { AdminNavbar } from "../../../components/navbar/admin/navbar"


export function AdminDashboard() {
    document.title = 'Dashboard admin'
    return <div>
        <AdminNavbar/>
    </div>
}

export default AdminDashboard