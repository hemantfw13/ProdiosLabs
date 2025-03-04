import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ddd" }}>
            <h2>Kanban Board</h2>
            <div>
                {user ? (
                    <>
                        <span>Welcome, {user.name} </span>
                        <button style={{ marginLeft: "10px" }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/">Login</Link> | <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
