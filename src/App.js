// Jiří Schlimbach, Discord uživatelské jméno: iamjiri97

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import CreateQR from "./pages/CreateQR"
import ErrorPage from "./pages/ErrorPage"

const App = () => {

  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/create-qr" element={<CreateQR />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
}

export default App