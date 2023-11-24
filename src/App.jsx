import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./screens/PostLogin/Home/page";
import Contact from "./screens/PostLogin/Contact/page";
import Dashboard from "./screens/Dashboard/page";
import Footer from "./screens/components/Footer";
import AvailableTrains from "./screens/PostLogin/AvailableTrains/page";
import Navbar from "./screens/components//Navbar";
import ReviewBooking from "./screens/PostLogin/ReviewBooking/page";
import PaymentPortal from "./screens/PostLogin/PaymentPortal/page";
import ConfirmationPage from "./screens/PostLogin/ConfirmationPage/page";
import {
  ClerkProvider,
} from "@clerk/clerk-react";

function App() {
  const navigate = useNavigate();
  const loc = useLocation();
  const clerkPubKey = process.env.PUBLIC_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {loc.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route
          path="/sign-in/*"
          element={<div className="h-full w-full flex justify-center py-6 ">
            <SignIn routing="path" path="/sign-in" />
            </div>}
        /> */}
        <Route
        path="/sign-in/*"
        element={<Dashboard/>}
        />
          <Route
          path="/sign-up/*"
          element={<Dashboard />}
        />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/availableTrains" element={<AvailableTrains />} />
        <Route exact path="/reviewBooking" element={<ReviewBooking />} />
        <Route exact path="/paymentPortal" element={<PaymentPortal />} />
        <Route exact path="/finalBill" element={<ConfirmationPage/>} />
      </Routes>
      {loc.pathname !== "/" && <Footer />}
    </ClerkProvider>
  );
}

export default App;
