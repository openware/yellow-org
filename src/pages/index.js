import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero/Hero';
import OpenFinance from '../components/OpenFinance/OpenFinance';
import Contacts from '../components/Contacts/Contacts';

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
                    <Contacts />
                    <OpenFinance />
                </main>
            </div>
        </Layout>
    );
}
