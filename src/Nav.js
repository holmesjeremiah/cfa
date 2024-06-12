import logoAlt from './cfaLogoAlt.png';
import { CgMenuRight } from 'react-icons/cg';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0" style={{ borderBottom: '2px solid #FF5757' }}>
            <div class="container-fluid " >
                <a class="navbar-brand" href="#">
                    <img src={logoAlt} alt="" style={{ height: '80px' }} />
                </a>
                <a class='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="" style={{ color: '#41628B', fontSize: '30px' }}><CgMenuRight /></span>
                </a>

                <div class="collapse navbar-collapse" id="navbarToggler">
                    <div></div>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item text-center">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" aria-current="page" href="#">Funding Solutions</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Nav;