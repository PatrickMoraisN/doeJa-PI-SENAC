import { Checkout } from "@/pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Confirmation } from "@/pages/Confirmation";
import { Login } from "@/pages/Login/Login";
import { Register } from "@/pages/Register/Register";
import { NewProduct } from "@/pages/NewProduct/NewProduct";
import { UpdateUser } from "@/pages/UpdateUser/UpdateUser";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/update-user" element={<UpdateUser />} />
    </Routes>
  );
}
