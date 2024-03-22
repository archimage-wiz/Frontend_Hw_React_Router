import { NavLink } from "react-router-dom";


export function Menu() {
    return (
        <>
            <nav className="menu">
                <NavLink to="/" className="menu__item">
                    Главная
                </NavLink>
                <NavLink to="/drift" className="menu__item">
                    Дрифт-такси
                </NavLink>
                <NavLink to="/timeattack" className="menu__item">
                    Time Attack
                </NavLink>
                <NavLink to="/forza" className="menu__item">
                    Forza Karting
                </NavLink>
                <NavLink to="/posts/1" className="menu__item">
                    Post 1
                </NavLink>
                <NavLink to="/posts/2" className="menu__item">
                    Post 2
                </NavLink>
            </nav>
        </>
    );
}
