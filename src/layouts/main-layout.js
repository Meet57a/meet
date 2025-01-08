import { Outlet } from "react-router-dom"
import Header from "../components/header"


const MainLayout = () => {
    return (
        <div>
            <main>
                <Header />
                <Outlet />
            </main>
            <footer>
                <p>Footer Content</p>
            </footer>
        </div>
    )
}

export default MainLayout