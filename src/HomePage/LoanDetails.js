
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiLineChartDown } from 'react-icons/bi'


const LoanDetails = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.9
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);



    return (
        <div style={{ backgroundColor: '#41628b', display: 'flex', justifyContent: 'center' }} >
            <div className="row container align-items-center justify-content-center" style={{ padding: '25px 0' }}>


                <motion.div
                    className="col-sm-12 col-md-7"
                    style={{ color: 'white', fontSize: '20px', marginBottom: '25px' }}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 1.5 }}
                    ref={ref}
                >
                    <BiLineChartDown size={'100px'} />
                    <br />
                    With interests rates of approximately 2% above prime rate, our capital is the perfect financial vehicle for businesses looking to secure affordable and reliable funding solutions.
                </motion.div>
                <div className="col-sm-12 col-md-5 " >
                    <div style={{ padding: '25px', borderRadius: '10px', color: 'black', fontSize: '30px', backgroundColor: 'white', }}>
                        <div style={{ borderLeft: '3px solid #FF5757', paddingLeft: '10px' }}>
                            Requirements
                        </div>
                        <ul style={{ fontSize: '15px' }}>
                            <li>

                                Minimum of 1 year in business
                            </li>
                            <li>
                                Credit score of 620 or higher
                            </li>
                            <li>
                                Monthly revenue of $100,000 or more
                            </li>
                            <li>
                                No existing non-Bank/Conventional UCC filings
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoanDetails;