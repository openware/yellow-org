import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import OpenFinance from '../components/OpenFinance';
import XLN from '../components/XLN';
import HowItWorks from '../components/HowItWorks';
import Tokenomics from '../components/Tokenomics';

export default function Home() {
    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');
    })

    return (
        <Layout
            title="Yellow DeFi - Discover WEB 3.0 Internet of Finance"
            description="Yellow DeFi is a new generation hybrid technology cryptocurrency exchange combining the best of decentralized and centralized performance."
        >
            <div className="homepage">
                <Hero />
                <main>
                    <XLN />
                    <HowItWorks />
                    <OpenFinance />
                    <Tokenomics />
                </main>
            </div>
        </Layout>
    );
}
