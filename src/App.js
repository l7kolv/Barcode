import { Switch } from "@material-ui/core";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BarcodeGenerator from "./pages/BarcodeGenerator";
import BarcodeScanner from "./pages/BarcodeScanner";
import Home from "./pages/Home";
import QrcodeScanner from "./pages/QrcodeScanner";
import Generator from "./pages/Generator";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/barcode_scanner" element={<BarcodeScanner />} />

        <Route path="/qr_scanner" element={<QrcodeScanner />} />

        <Route path="/generator" element={<Generator />} />

      </Routes>
    </div>
  );
}

export default App;