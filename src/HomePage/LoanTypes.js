import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import lineOfCredit from './lineOfCredit.png'
import constuctionLoan from './constructionLoans.png'
import termLoan from './termLoan.png'

const LoanTypes = () => {

    const loanTypes = [
        {
            "title": "Lines of Credit",
            "icon": lineOfCredit,
            "description": "Our lines of credit provide flexible funding options based on your business's account receivables. This allows you to access capital tied up in unpaid invoices, ensuring smooth cash flow and operational stability.",
            "features": [
                "Quick access to working capital",
                "Competitive interest rates",
                "Flexible repayment terms"
            ],
            "idealFor": "Businesses with consistent invoicing and strong receivables management."
        },
        {
            "title": "Construction Loans",
            "icon": constuctionLoan,
            "description": "Designed for construction businesses, our loans offer funding based on your secured contracts. This helps you finance project costs from start to finish, whether for private, state, or federal contracts.",
            "features": [
                "Financing for materials, labor, and other project expenses",
                "Tailored to the unique needs of construction projects",
                "Competitive interest rates"
            ],
            "idealFor": "Construction companies undertaking new projects, expansions, or renovations."
        },
        {
            "title": "Term Loans",
            "icon": termLoan,
            "description": "Our term loans provide lump-sum financing based on your outstanding invoices. This solution helps you manage larger expenses, expand your business, or invest in new opportunities.",
            "features": [
                "Fixed interest rates for predictable payments",
                "Flexible loan terms to match your business cycle",
                "No collateral required beyond your invoices"
            ],
            "idealFor": "Businesses needing substantial upfront capital for growth or major expenses."
        }
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.15
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.75
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="container">
            <div style={{ color: 'black', fontWeight: 'bold', fontSize: '50px', borderLeft: '5px solid #FF5757', paddingLeft: '10px', marginBottom: '25px', marginLeft: '50px' }}>Financing Solutions for Your Business</div>
            <motion.div
                ref={ref}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {
                    loanTypes.map((loan, index) => (
                        <motion.div
                            key={index}
                            style={{ width: '400px', backgroundColor: 'white', borderRadius: '10px', padding: '25px' }}
                            variants={cardVariants}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ color: '#FF5757', fontWeight: 'bold', fontSize: '25px' }}>
                                    {loan.title}
                                </div>
                                <div>
                                    <img src={loan.icon} style={{ height: '30px' }} alt="" />
                                </div>
                            </div>
                            <div>
                                {loan.description}
                            </div>
                            <ul>
                                {loan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                            <div style={{ color: '#41628B', fontSize: '17.5px' }}>
                                {loan.idealFor}
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default LoanTypes;
