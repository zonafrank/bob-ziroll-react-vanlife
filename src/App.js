import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashbaord from "./pages/host/Dashbaord";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanDetail from "./pages/host/HostVanDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashbaord />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
