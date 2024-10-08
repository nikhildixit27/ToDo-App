import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // this tells we are using "user" property of auth slice of state
    const { user } = useSelector((state) => state.auth)


    // Event Handler for Logging out
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }

    return (
        <header className='header'>
            <div className="logo">
                <Link to="/"> TaskTracker</Link>
            </div>

            <ul>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header