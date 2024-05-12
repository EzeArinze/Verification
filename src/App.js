import VerificationPage from "./Pages/VerificationPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerificationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
