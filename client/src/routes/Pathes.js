import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Main from "../pages/dashboard/Main";

const Pathes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Main />} />
      </Routes>
    </>
  );
};

export default Pathes;
