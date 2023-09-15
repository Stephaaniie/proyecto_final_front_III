import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Favs from "./routes/Favs";
import Detail from "./routes/Detail";
import { ContextProvider } from "./components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/doctor/:id" element={<Detail />} />
      </Routes>
    </ContextProvider>
  )
}

export default App
