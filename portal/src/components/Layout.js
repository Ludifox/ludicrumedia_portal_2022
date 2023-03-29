import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <section id="portal">
            <header>
                <h1>Portal</h1>
                <nav>
                    <Link to="/prosjekter">Prosjekter</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </section>
    )
}