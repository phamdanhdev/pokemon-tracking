import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHomePage from "./pages/HomePage";
import AppDetailPage from "./pages/DetailPage";
import AppFavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AppHomePage />} />
          <Route path="/pokemon" element={<AppDetailPage />} />
          <Route path="/favorites" element={<AppFavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
