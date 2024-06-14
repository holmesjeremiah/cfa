import Footer from '../Footer';

import Nav from '../Nav';
import { MdOutlineHandshake } from "react-icons/md";

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#E4EAF1' }}>
            <Nav />
            <div style={{ height: '50px' }}></div>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ color: 'black', fontWeight: 'bold', fontSize: '50px', borderLeft: '5px solid #FF5757', paddingLeft: '10px', marginBottom: '25px' }}>About Us</div>
                <p></p>
            </div>
            <div className="container" >
                <div className="row" style={{ display: 'flex', justifyContent: 'center', }}>
                    <div className="col-sm-12 col-md-6" style={{ margin: '25px 0' }}>
                        <img
                            src='/aboutUs.jpg'
                            className="img-fluid"
                            alt="About Us"
                            style={{ objectFit: 'cover', borderRadius: '10px', width: '100%', maxHeight: '500px' }}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ padding: '25px', borderRadius: '10px', color: 'black', fontSize: '15px', backgroundColor: 'white' }}>

                            <span style={{ borderLeft: '3px solid #FF5757', padding: '0 5px 0 7.5px', fontSize: '22.5px' }}>
                                Commercial Funders of America is a premier provider of comprehensive financing solutions,
                            </span>
                            leveraging robust partnerships with established conventional banks. Founded with a commitment to empowering businesses, we specialize in crafting tailored financial products that cater to a wide array of business needs. Our strategic alliances with reputable institutions enable us to deliver innovative and customized financial services that help businesses thrive in a competitive marketplace.
                            <br /><br />
                            We pride ourselves on our ability to understand the unique challenges faced by businesses across various industries. By collaborating closely with our partner banks, we ensure that our clients receive the best possible financial solutions. Our expertise spans across multiple financing areas, including account receivables, construction contracts, and invoices, allowing us to offer a diverse range of products designed to fuel business growth.
                            <br /><br />
                            Our team is dedicated to providing exceptional service and support to our clients, ensuring that their financial needs are met with efficiency and transparency. With a deep understanding of the financial landscape, we are well-equipped to guide businesses through the complexities of securing funding, ultimately helping them achieve their goals and expand their operations.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '25px' }}></div>

            <div className="container" >
                <div className="row" style={{ display: 'flex', justifyContent: 'center', }}>

                    <div className="col-sm-12 col-md-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ padding: '25px', borderRadius: '10px', color: 'black', fontSize: '15px', backgroundColor: 'white' }}>
                            <div style={{ borderLeft: '3px solid #FF5757', paddingLeft: '10px', fontSize: '30px', }}>
                                Our Mission
                            </div>
                            At Commercial Funders of America, we recognized a significant gap in the market where millions of business owners were heavily relying on Merchant Cash Advances (MCA) and Revenue-Based Financing (RBF) without fully understanding the exorbitant costs associated with these options. Our mission is to address this issue by providing more cost-effective and transparent financing alternatives that promote sustainable business growth.
                            <br />
                            <br />
                            We are committed to educating business owners about the true cost of various financing options and empowering them with the knowledge to make informed decisions. By offering more affordable and straightforward financial solutions, we aim to support the long-term success of our clients. Our goal is to create a financial environment where businesses can access the funding they need without compromising their financial health.
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
                        <MdOutlineHandshake style={{ fontSize: '200px', margin: 'auto', color: '#FF5757' }} />
                    </div>
                </div>
            </div>

            <div style={{ height: '50px' }}></div>
            <Footer />
        </div>
    );
}

export default AboutUs;
