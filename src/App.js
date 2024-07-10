import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Mypage from "./page/Mypage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<Mypage /> } />
      </Routes>
    </BrowserRouter>
  );
}
