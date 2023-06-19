import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DefaultPage from "./DefaultPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pagina/:name" element={<DefaultPage />}/>
            </Routes>
        </BrowserRouter>
    );
}