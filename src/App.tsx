import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./Components/HomePage";
import { DriftPage } from "./Components/DriftPage";
import { TimeAttackPage } from "./Components/TimeAttackPage";
import { ForzaPage } from "./Components/ForzaPage";
import { Menu } from "./Components/Menu";
import { Posts } from "./Components/Posts";



export default function App() {
    return (
        <>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage gg="*" />} ></Route>
                    <Route path="/drift" element={<DriftPage />} />
                    <Route path="/timeattack" element={<TimeAttackPage />} />
                    <Route path="/forza" element={<ForzaPage />} />
                    {/* ЗАДАНИЕ 2 */}
                    <Route path="/posts/:id/:ee?" element={<Posts />} />
                </Routes>
            </Router>
        </>
    );
}
