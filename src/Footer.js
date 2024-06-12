import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import logoAlt from './cfaLogoAlt.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
            <div className='container row' style={{ margin: '25px' }}>
                <div className="col-sm-6">
                    <img src={logoAlt} alt="" style={{ height: '100px' }} />
                    <div style={{ paddingLeft: '10px' }}>©2024 CFoA, All Rights Reserved</div>

                </div>
                <div className="col-sm-3" style={{ paddingTop: '25px' }}>
                    <div style={{ borderLeft: '2px solid #FF5757', paddingLeft: '10px' }}>
                        Quick Links
                    </div>
                    <div style={{ paddingLeft: '15px' }}>
                        <a href="" style={{ color: '#41628b !important' }}>Home</a>
                        <br />
                        <a href="" style={{ color: '#41628b !important' }}>About Us</a>
                        <br />
                        <a href="" style={{ color: '#41628b !important' }}>Funding Solutions</a>
                    </div>

                </div>
                <div className="col-sm-3" style={{ paddingLeft: '10px', fontSize: '30px', color: '#41628b', display: 'flex', gap: '10px', margin: '25px 0' }}>
                    <FaLinkedin />
                    <FaFacebookF />
                    <FaInstagram />
                </div>

            </div>
        </div>
    )
}

export default Footer;