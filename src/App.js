import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingFrom from "./Pages/Home/BookingForm/BookingFrom";
import BookingSuccess from "./Pages/Home/BookingForm/BookingSuccess";
import Experts from "./Pages/Home/Experts/Experts";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./RequireAuth/RequireAuth";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/services"
            element={
              <RequireAuth>
                <Services></Services>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/experts"
            element={
              <RequireAuth>
                <Experts></Experts>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/bookingsuccess" element={<BookingSuccess></BookingSuccess>}></Route>
          <Route
            path="/bookingform"
            element={
              <RequireAuth>
                <BookingFrom></BookingFrom>
              </RequireAuth>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
