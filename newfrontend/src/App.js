import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import "./App.css"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/board" element={
                        <DndProvider backend={HTML5Backend}>
                        <Board />
                    </DndProvider>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;