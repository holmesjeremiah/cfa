import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import logoAlt from './cfaLogoAlt.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div className='container row' style={{ margin: '25px' }}>


                <div className="col-sm-3" style={{ paddingTop: '25px', }}>

                    <div style={{ paddingLeft: '15px' }}>
                        <div style={{ borderLeft: '2px solid #FF5757', paddingLeft: '10px' }}>
                            Address
                        </div>
                        <div style={{ paddingLeft: '15px' }}>

                            <a href="https://maps.app.goo.gl/CqNoYqJHwHDx7ng76" >

                                1515 Market St.
                                <br />
                                Suite 1200
                                <br />
                                Philadelphia, PA 19102

                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ paddingTop: '25px', }}>

                    <div style={{ paddingLeft: '15px' }}>
                        <div style={{ borderLeft: '2px solid #FF5757', paddingLeft: '10px' }}>
                            Quick Links
                        </div>
                        <div style={{ paddingLeft: '15px' }}>

                            <a href="/" style={{ color: '#41628b !important' }}>Home</a>
                            <br />
                            <a href="/aboutus" style={{ color: '#41628b !important' }}>About Us</a>
                            <br />
                            <a href="/ourteam" style={{ color: '#41628b !important' }}>Our Team</a>

                        </div>
                    </div>
                </div>



                <div className="col-sm-2" style={{ paddingLeft: '10px', fontSize: '30px', color: '#41628b', display: 'flex', gap: '10px', margin: '25px 0' }}>

                    <a href="https://www.facebook.com/profile.php?id=61560812047498" style={{ color: '#41628b !important', }}>
                        <FaFacebookF />
                    </a>
                    <a href="">
                        <FaInstagram />
                    </a>
                    <a href="">
                        <FaLinkedin />
                    </a>
                </div>


                <div className="col-sm-4">

                    <img src={logoAlt} alt="" style={{ height: '100px' }} />
                    <div style={{ paddingLeft: '10px' }}>

                        ©2024 CFoA, All Rights Reserved

                    </div>

                </div>

            </div>
            <div className='container row' style={{ margin: '25px' }}>
                <div className="col-sm-12">
                    <ol>

                        <li>
                            Annual Percentage Yield (APY) accurate as of 06/13/2024. Rate tiers are as follows: 5.00% APY applies to balances between $0.00 and $24,999.99; 5.00% APY applies to balances between $25,000.00 and $49,999.99; 5.00% APY applies to balances of $50,000.00 and $99,999.99; 5.00% APY applies to balances of $100,000.00 and $249,999.99; and 5.00% APY applies to balances of $250,000.00 and greater. Rates are variable and subject to change at any time without notice, at the sole discretion of the bank. Fees may reduce earnings.
                        </li>
                        <li>
                            National average source: FDIC as of 1/25/2024.
                        </li>
                        <li>
                            Standard data and message rates may apply to Mobile Banking services. This includes the use of Commercial Funders of America Mobile and other services. Android is a trademark of Google LLC. iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and other countries.
                        </li>
                    </ol>
                    <br />
                    Unless otherwise specified, all advertised offers and terms and conditions of accounts and services are subject to change at any time without notice. After an account is opened or service begins, it is subject to its features, conditions and terms, which are subject to change at any time in accordance with applicable laws and agreements. Please contact an Commercial Funders of America representative for details.

                </div>

            </div>
        </div>
    )
}

export default Footer;