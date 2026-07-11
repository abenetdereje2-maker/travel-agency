import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <main className="pt-20">
        <AppRoutes />
      </main>

      <Footer />

    </div>
  );
}

export default App;