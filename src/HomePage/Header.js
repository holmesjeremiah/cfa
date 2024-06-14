import React, { useState, useEffect } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import headerPhoto from './headerPhoto.jpg';
import HowItWorksModal from './HowItWorksModal';

const Header = () => {
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const listControls = useAnimation();
    const imageControls = useAnimation();
    const [listRef, listInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const [imageRef, imageInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    useEffect(() => {
        const handleResize = () => {
            setDeviceIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (listInView) {
            listControls.start('visible');
        } else {
            listControls.start('hidden');
        }
    }, [listControls, listInView]);

    useEffect(() => {
        if (imageInView) {
            imageControls.start('visible');
        } else {
            imageControls.start('hidden');
        }
    }, [imageControls, imageInView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.75,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, x: 0, transition: {
                duration: 1.25
            }
        }
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }} >
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div style={{ fontSize: deviceIsMobile ? '50px' : '80px', lineHeight: '1', paddingBottom: '25px' }}>
                        Unlock the Potential of Your Business  <span style={{ color: '#41628B', }}>Today!</span>
                    </div>
                    <div>
                        At Commercial Funders of America, we believe in providing you with a seamless experience, allowing you to focus on what matters most—growing your business. Start your journey with us and discover the difference!
                    </div>
                    <motion.div
                        style={{ display: 'flex', alignContent: 'end', flexWrap: 'wrap' }}
                        variants={containerVariants}
                        initial="hidden"
                        animate={listControls}
                        ref={listRef}
                    >
                        <motion.div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }} variants={itemVariants}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Application Fee
                        </motion.div>
                        <motion.div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }} variants={itemVariants}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Additional Upfront Fees
                        </motion.div>
                        <motion.div style={{ borderLeft: '2px solid #FF5757', margin: '25px', paddingLeft: '10px' }} variants={itemVariants}>
                            <span style={{ fontSize: '25px' }}>No</span><br />
                            Hidden Costs
                        </motion.div>
                    </motion.div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <button onClick={() => window.location.href = 'https://form.jotform.com/241657093645059'} style={{ margin: '25px', backgroundColor: '#41628B', color: 'white', padding: '10px 10px', borderRadius: '20px' }}>
                                Apply Now!
                            </button>
                        </div>
                        <div>
                            <a href="#" onClick={handleShowModal} style={{ color: '#41628B' }}>
                                How it works
                                <IoMdInformationCircleOutline style={{ color: '#41628B', fontSize: '25px', marginLeft: '5px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6" style={{ display: 'flex', overflow: 'clip' }}>
                    <motion.img
                        src={headerPhoto}
                        className="img-fluid"
                        alt=""
                        style={{ objectFit: 'cover', borderRadius: '10px' }}
                        initial="hidden"
                        animate={imageControls}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 1.5 }}
                        ref={imageRef}
                    />
                </div>
            </div>
            <HowItWorksModal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Header;
