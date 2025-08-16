import { Routes, Route } from "react-router";
import MainLayout from "../../Pages/Layout/MainLayout.jsx";
import { lazy, Suspense } from 'react';
// import { Facebook } from 'react-content-loader';
import CustomPageLoader from "../PageLoader/CustomPageLoader.jsx";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"))
const CoinDetailsPage = lazy(() => import("../../Pages/CoinDetails/CoinDetails.jsx"))

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    <Route index element={
                        <Suspense fallback={<CustomPageLoader/>}>
                            <HomePage />
                        </Suspense>
                        } 
                    />

                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<CustomPageLoader/>}>
                            <CoinDetailsPage />
                        </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </>
    )
}

export default Routing;