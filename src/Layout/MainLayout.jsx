import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navigation/Navigation'

export default function MainLayout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
