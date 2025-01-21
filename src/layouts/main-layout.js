import { Outlet } from "react-router-dom"
import Header from "../components/header"


const MainLayout = () => {

    return (
        <div>
            <main>
                <Header />
                <Outlet />
            </main>
            <footer style={{ backgroundColor: "#020617", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <div style={{ color: "#6b7280" }}>Developed by MEET❤️</div>
            </footer>
        </div>
    )
}

export default MainLayout