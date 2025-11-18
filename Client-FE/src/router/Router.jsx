import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ProtectedRoutes from "./ProtectedRoute.jsx";
import CustomersViewPage from "../pages/CustomersViewPage/CustomersViewPage.jsx";
import SalesSubmitPage from "../pages/SalesSubmitPage/SalesSubmitPage.jsx";
import SalesViewPage from "../pages/SalesViewPage/SalesViewPage.jsx";
import ReportViewPage from "../pages/ReportViewPage/ReportViewPage.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={ <ProtectedRoutes />} >
                    <Route path="/customers" element={<CustomersViewPage />} />
                    <Route path="/sales" element={<SalesViewPage />} />
                    <Route path="/sales/new" element={<SalesSubmitPage />} />
                    <Route path="/sales/report" element={<ReportViewPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter