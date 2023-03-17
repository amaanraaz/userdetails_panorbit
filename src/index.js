import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import { APIContextProvider } from './utils/userContext';
import HeroPage from './components/HeroPage';
import ToDo from './components/ToDo';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Post from './components/Post';

// creating a router configuration as im using react router for routing
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:"/user/:id",
        element: <HeroPage />,
        children:[
            {
                path:"/user/:id/",
                element:<Profile />
            },
            {
                path:"/user/:id/todo",
                element:<ToDo />
            },
            {
                path:"/user/:id/posts",
                element:<Post />
            },
            {
                path:"/user/:id/gallery",
                element:<Gallery />
            }

        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIContextProvider><RouterProvider router={appRouter} /></APIContextProvider> );
