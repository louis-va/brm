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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="payment" element={<Payment />} />
      <Route path="screening" element={<Screening />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="admin/" element={<Dashboard />} />
      <Route path="admin/screening" element={<AdminScreening />} />
      <Route path="admin/booking" element={<Booking />} />
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
