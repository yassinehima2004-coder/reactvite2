import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function Mainlayout() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        
        </>
    )
};