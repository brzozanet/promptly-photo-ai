import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import bgImage from "../../assets/bg-dark-photo.jpg";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 py-6 flex-1 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
