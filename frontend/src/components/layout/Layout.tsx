import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground max-w-5xl w-full mx-auto">
        <header className="w-full border-b bg-white/80 backdrop-blur">
          <Header />
        </header>
        <main className="w-full px-4 py-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}
