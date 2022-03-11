import FormYupValidation from "./FormYupValidation.js";
import FormProfessor from "./FormProfessor.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormYupValidation />} />

          <Route path="/cadastro-professor" element={<FormProfessor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
