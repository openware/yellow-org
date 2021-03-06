import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import OpenFinance from '../components/OpenFinance';
import XLN from '../components/XLN';
import HowItWorks from '../components/HowItWorks';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Partners from '../components/Partners';
import WhatsYellow from '../components/WhatsYellow';
import FeaturesOfYellow from '../components/FeaturesOfYellow';
import Team from '../components/Team';
import Community from '../components/Community';

export default function Home() {
    return (
        <Layout
            title="Yellow DeFi - Discover WEB 3.0 Internet of Finance"
            description="Yellow DeFi is a new generation hybrid technology cryptocurrency exchange combining the best of decentralized and centralized performance."
        >
            <div className="homepage">
                <Hero />
                <main>
                    <WhatsYellow />
                    <FeaturesOfYellow />
                    <XLN />
                    <HowItWorks />
                    <OpenFinance />
                    <Tokenomics />
                    <Roadmap />
                    <Team />
                    <Partners />
                    <Community />
                </main>
            </div>
        </Layout>
    );
}
