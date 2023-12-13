import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {

    const { isAuthenticated, logout, user } = useUser();
    return (
        <div className="wrapper">
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to= {
                        isAuthenticated ? "/carsRent" : "/"
                    }>
                        FASTCARS
                    </Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <div className="left-nav-toggle">
                        <a href="#">
                            { isAuthenticated ? (
                                <>
                                    <i className="stroke-hamburgermenu"></i>
                                </>
                            ): (
                            <>        
                            </>
                            )}
                        </a>
                    </div>
                    { isAuthenticated ? (
                        <>  
                            <form className="navbar-form navbar-left">
                                <input type="text" className="form-control" placeholder="Find the car you need..." />
                            </form>
                        </>
                        ): (
                        <>        
                        </>
                        )}
                    <ul className="nav navbar-nav navbar-right">
                        { isAuthenticated ? (
                        <>
                            <li className="dropdown">
                            <Link >Welcome {user.firstname} </Link>
                            </li>
                            <li className="dropdown">
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/" onClick={() => {logout()}}>Logout</Link>
                            </li>
                        </>

                        ): (
                        <>
                            <li className="dropdown">
                                <Link to='/register'>Register</Link>
                            </li>
                            <li className="dropdown">
                                <Link to='/login'>Login</Link>
                            </li>
                        </>
                        )}
                        <li className="dropdown">
                            <Link to="/profile">
                            
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        { isAuthenticated ? (
            <>
                <aside className="navigation">
                    <nav>
                        <ul className="nav luna-nav">
                            <li className="nav-category">
                                Hello {user.firstname}, how are you?
                            </li>
                            <li>
                                <Link to='/carsRent' >Cars Rent</Link>
                                <Link to='/carsSale' >Cars Sale</Link>
                                <Link to='/myCarsRent' >My Car Rental <span className="sub-nav-icon"> <i className="stroke-plus"></i> </span> </Link>
                                <Link to='/myCarsSale' >My Car Sales <span className="sub-nav-icon"> <i className="stroke-plus"></i> </span></Link>
                                <Link to='/cars' >My Reservation <span className="sub-nav-icon"> <i className=" fa-solid fa-circle-plus"></i> </span></Link>
                            </li>
                        
                            

                            <li className="nav-category">
                                Offices    
                            </li>

                            <li>
                                <Link to='/offices' >Lima <span className="sub-nav-icon"> <i className="stroke-plus"></i> </span></Link>
                                <Link to='/my-offices' >My Offices<span className="sub-nav-icon"> <i className="stroke-plus"></i> </span></Link>

                                
                            </li>   
                            <li>
                                <a href="versions.html">
                                    <span className="badge pull-right">1</span>
                                    Versions
                                </a>
                            </li>
                            <li className="nav-info">
                                <i className="pe pe-7s-shield text-accent"></i>
                                <div className="m-t-xs">
                                    <span className="c-white">FASTCARS</span> Hello, how are you {user.firstname}, I hope you have a good day, the FastCar group greets you.
                                </div>             
                            </li>
                        </ul>
                    </nav>
                </aside>
            </>
        ): (
            <>
                
            </>
        )}
        </div>
    );
}
