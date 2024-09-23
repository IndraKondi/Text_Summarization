import { useState } from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/Home';
import UploadFile from './components/UploadFile';
import ManualText from './components/ManualText';

const AppLayout = () => {
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "upload",
                element: <UploadFile />
            },
            {
                path: "manual",
                element: <ManualText />
            }
        ]
    }
]);



function App() {

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default App
