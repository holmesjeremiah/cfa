import Footer from './Footer';
import Nav from './Nav';

import { ImLinkedin } from "react-icons/im";



const OurTeam = () => {
    const teamMembers = [
        {
            name: "John Harrison",
            photo: 'jHarrison.png',
            title: "Executive Director, Chief Financial Officer",
            //linkedIn: 'https://www.linkedin.com/in/john-harrison-84ab32314/',
            description: "John oversees the creation, management, and implementation of the company’s financial strategies within the merchant financing sector. He is responsible for guiding clients through their asset allocation decisions specific to merchant financing. John is known for providing top-notch service and has a profound understanding of merchant financing practices. He is a member of both the CFA Institute and the New York Society of Security Analysts. John holds a Bachelor of Science in Finance from the University of California, Berkeley."
        },
        {
            name: "Linda Martinez",
            photo: 'lMartinez.png',
            //linkedIn: 'https://www.linkedin.com/in/linda-martinez-5a8834313/',
            title: "Executive Director, Senior Wealth Advisor, JD",
            description: "Linda focuses on creating and executing investment strategies tailored to merchant financing. She has dedicated her career to addressing all aspects of her clients' investment and fiduciary requirements within the merchant financing industry. With over thirty years of experience in wealth management within the New York market, Linda holds a BS/BA degree from the University of Texas and a JD from Harvard Law School."
        },
        {
            name: "Steven MacKinnon",
            photo: 'sMacKinnon.jpg',
            //linkedIn: 'https://www.linkedin.com/in/steven-mackinnon-839834313/',
            title: "Executive Director, Chief Trust Officer",
            description: "Steven is a CPA with more than three decades of experience in fiduciary services and taxation, including trust and estate planning specific to merchant financing for high-net-worth individuals. He has spent his career assisting clients with intricate tax and wealth structures to meet their financial and legacy objectives within the merchant financing industry. Steven earned his Bachelor of Accounting from the University of Miami and a Master of Science in Taxation from New York University."
        },
        {
            name: "Alex Collins",
            photo: 'aCollins.webp',
            //linkedIn: 'https://www.linkedin.com/in/alex-collins-284541314/',
            title: "Senior Director, Trust and Wealth Advisor",
            description: "Alex is a seasoned fiduciary professional with over twenty years of expertise in domestic and international trust administration within the merchant financing sector. He is proficient in managing revocable and irrevocable trusts, guardianships, special needs trusts, investment management accounts, business entities, and non-resident alien relationships, all with a focus on merchant financing. Alex graduated from Boston University and the American Bankers Association Trust School."
        },
        {
            name: "Emily Wright",
            photo: 'eWright.webp',
            //linkedIn: 'https://www.linkedin.com/in/emily-wright-0b29ab313/',
            title: "Executive Director, Head of Investment Management, and CERTIFIED FINANCIAL PLANNER™ (CFP®)",
            description: "Emily is dedicated to assisting individuals, families, and business owners in managing their wealth within the merchant financing sector. She holds an MBA from Stanford Graduate School of Business with a focus on Asset Management and Sales & Trading. Emily is passionate about developing tailored investment strategies to help clients achieve their financial goals specifically related to merchant financing."
        }
    ];

    return (
        <div style={{ backgroundColor: '#E4EAF1' }}>
            <Nav />
            <div style={{ height: '50px' }}></div>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ color: 'black', fontWeight: 'bold', fontSize: '50px', borderLeft: '5px solid #FF5757', paddingLeft: '10px', marginBottom: '25px' }}>Our Team</div>

            </div>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    teamMembers.map((member, index) => (
                        <div style={{ backgroundColor: 'white', padding: '25px', width: '500px', margin: '25px', borderRadius: '10px' }}>
                            <div>

                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    {member.title}
                                </div>
                                <div style={{ fontSize: '35px' }}>
                                    {member.name}
                                    {
                                        member.linkedIn &&
                                        <a href={member.linkedIn}><ImLinkedin size="25px" style={{ margin: '0 0 10px 10px' }} /></a>
                                    }
                                </div>
                                <div style={{ height: '150px', width: '150px', margin: 'auto' }}>
                                    <img src={'/' + member.photo} alt="" style={{ objectFit: 'cover', width: '100%', maxHeight: '100%', borderRadius: '50%' }} />
                                </div>

                                {member.description}

                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{ height: '25px' }}></div>


            <div style={{ height: '50px' }}></div>
            <Footer />
        </div>
    );
}

export default OurTeam;
