import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Wassim abdennadher</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-link">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <NavLink class="active"  to='/' exact>Home</NavLink>
                        </li>
                        <li class="nav-item nav-link">
                            <NavLink to='/Skills'>Skills</NavLink>
                        </li>
                        <li class="nav-item nav-link">
                            <NavLink to='/Projects'>Projects</NavLink>
                        </li>
                        <li class="nav-item nav-link">
                            <NavLink to='/Contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar