import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import WebRoutes from "./pages/WebRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <WebRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
