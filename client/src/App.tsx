import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Screening from "./pages/Screening";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/backoffice/Dashboard";
import AdminScreening from "./pages/backoffice/AdminScreening";
import Booking from "./pages/backoffice/Booking";
import DesignSystem from "./pages/DesignSystem";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="payment/:id" element={<Payment />} />
      <Route path="design-system" element={<DesignSystem />} />
      <Route path="screening/:id" element={<Screening />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="admin/" element={<Dashboard />} />
      <Route path="admin/screening" element={<AdminScreening />} />
      <Route path="admin/booking" element={<Booking />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
