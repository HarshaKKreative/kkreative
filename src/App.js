import { useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import Nav from "./Navbar/Navbar";
function App() {
  const currentPage = useLocation().pathname;

  return (
    <div className="App">
      {currentPage === "/" ? <Nav /> : <Nav currentPage={"/"} />}
      <AppRoutes />
    </div>
  );
}
export default App;
