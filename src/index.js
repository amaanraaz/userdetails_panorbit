import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage';
import { APIContextProvider } from './utils/userContext';
import HeroPage from './components/HeroPage';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:"/user/:id",
        element: <HeroPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIContextProvider><RouterProvider router={appRouter} /></APIContextProvider> );
