import Layout from "./components/Layout";
import GempaPage from "./pages/CovidPages/GempaPage";
import IndonesiaPage from "./pages/CovidPages/IndonesiaPage";
import ProvincePage from "./pages/CovidPages/ProvincePage";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
       <Layout>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/indonesia" element={<IndonesiaPage />}></Route>
          <Route path="/provinsi" element={<ProvincePage />} ></Route>
          <Route path="/about" element={<GempaPage />} ></Route>
        </Routes>
        {/* <Home /> */}
       </Layout>
    </div>
  );
}

export default App;
