const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yellow.org',
  tagline: 'Dive into DeFi with Yellow',
  url: 'https://www.yellow.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openware', // Usually your GitHub org/user name.
  projectName: 'yellow', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'Yellow Chain',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/#about', label: 'About', position: 'left'},
        {to: '/#tokenomics', label: 'Token', position: 'left'},
        {to: '/#roadmap', label: 'Roadmap', position: 'left'},
        {to: '/#team', label: 'Team', position: 'left'},
        {to: '/blog', label: 'News', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Yellow Chain',
        src: 'img/logo-white.svg',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Vision',
              to: '/docs/vision',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Tokenomics',
              to: '/docs/tokenomics',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/yellow_defi',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/yellow_org',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/yellow',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openware/opendax',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yellow, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: 'UA-180725760-3',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/openware/yellow-org/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/openware/yellow-org/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
