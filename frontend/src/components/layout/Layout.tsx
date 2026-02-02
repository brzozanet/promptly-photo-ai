import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="bg-blue-100 border-b border-gray-200 px-6 py-4">
          <Header />
        </header>
        <main className="w-full px-4 py-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
