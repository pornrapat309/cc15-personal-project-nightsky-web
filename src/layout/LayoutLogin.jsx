import { Outlet } from "react-router-dom";
import Header from './Header';

export default function LayoutLogin() {
  return (
    <div className="bg-[url('/src/assets/bg.jpg')] w-screen h-screen bg-cover bg-center">
      <Header />
      <Outlet />
    </div>
  )
}