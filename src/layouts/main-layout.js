import { Outlet } from "react-router-dom"
import Header from "../components/header"


const MainLayout = () => {
    
    return (
        <div>
            <main>
                <Header />
                <Outlet />
            </main>
            <footer style={{ backgroundColor: "#020617", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                <div style={{ color: "#6b7280"}}>Developed by MEET❤️</div>
                <div >
                    <p style={{ color: "#6b7280"}}>Email: meetsenjali2018@gmail.com</p>
                    <p style={{ color: "#6b7280"}}>Phone: 9904239048</p>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout