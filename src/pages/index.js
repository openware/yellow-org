import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';
import OpenFinance from '../components/OpenFinance';
import XLN from '../components/XLN';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <div className="homepage">
                <Hero />
                <main>
                    <XLN />
                    <OpenFinance />
                </main>
            </div>
        </Layout>
    );
}
