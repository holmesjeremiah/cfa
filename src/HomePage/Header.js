import React, { useState, useEffect } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import headerPhoto from './headerPhoto.jpg'

const Header = () => {
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setDeviceIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }} >
            <div className="row">
                <div className="col-sm-12 col-md-6" >
                    <div style={{ fontSize: deviceIsMobile ? '50px' : '80px', lineHeight: '1', paddingBottom: '25px' }}>
                        Unlock the Potential of Your Business  <span style={{ color: '#41628B', }}>Today!</span>
                    </div>
                    <div>
                        At Commercial Funders of America, we believe in providing you with a seamless experience, allowing you to focus on what matters most—growing your business. Start your journey with us and discover the difference!
                    </div>
                    <div style={{ display: 'flex', alignContent: 'end', flexWrap: 'wrap', }}>
                        <div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Application Fee
                        </div>
                        <div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Additional Upfront Fees
                        </div>
                        <div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Hidden Costs
                        </div>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <button style={{ margin: '25px', backgroundColor: '#41628B', color: 'white', padding: '10px 10px', borderRadius: '20px' }}>
                                Apply Now!
                            </button>
                        </div>
                        <div>
                            <a href="" style={{ color: '#41628B' }}>
                                How it works
                                <IoMdInformationCircleOutline style={{ color: '#41628B', fontSize: '25px', marginLeft: '5px' }} />
                            </a>
                        </div>
                    </div>
                    {
                        /*
                        <div style={{ display: 'flex', alignContent: 'end', }}>
                        <div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }}>
                        <span style={{ fontSize: '25px' }}>No</span><br />
                        Hidden Costs
                        </div>
                        </div>
                        */
                    }
                </div>
                <div className="col-sm-12 col-md-6" style={{ display: 'flex', }}>
                    <img src={headerPhoto} className="img-fluid " alt="" style={{ objectFit: 'cover', borderRadius: '10px' }} />
                </div>


            </div>
        </div>
    );
}

export default Header;