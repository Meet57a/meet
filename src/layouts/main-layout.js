import { Outlet } from "react-router-dom"
import Header from "../components/header"


const MainLayout = () => {
    
    return (
        <div>
            <main>
                <Header />
                <Outlet />
            </main>
            <footer style={{ backgroundColor: "#020617", padding: "10px" }}>
                <p>Footer Content</p>
            </footer>
        </div>
    )
}

export default MainLayout