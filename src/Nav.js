import logoAlt from './cfaLogoAlt.png';
import { CgMenuRight } from 'react-icons/cg';
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Nav = () => {
    function scrollToElement(id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <>
            <div style={{ backgroundColor: '#FFD6D6', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div style={{ padding: '10px' }}>
                    <a href="mail:jl_holmes@outlook.com" style={{ color: 'black' }}><CiMail />contact@commercialfundersofamerica.com</a>

                </div >
                <div style={{ padding: '10px' }}>
                    <a href="tel:+17173466319" style={{ color: 'black' }}><CiPhone />+1(717)346-6319</a>

                </div>
            </div>
            <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary p-0" style={{ borderBottom: '2px solid #FF5757', }}>
                <div class="container-fluid " >
                    <a class="navbar-brand" href="/">
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
                                <a class="nav-link" aria-current="page" href="/ourteam">Our Team</a>
                            </li>
                            <li class="nav-item text-center">
                                <a class="nav-link" aria-current="page" href="/aboutus">About Us</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Nav;