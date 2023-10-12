import { Outlet } from "react-router-dom";
import Header from './Header';

export default function LayoutLogin() {
  return (
    <div className="bg-[url('/src/assets/bg.jpg')] bg-cover bg-center w-full h-screen">
      <Header />
      <Outlet />
    </div>
  )
}