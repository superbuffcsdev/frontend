import React from "react";
import { Header } from './header';
import { Home } from './home';
import { About } from './about';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}