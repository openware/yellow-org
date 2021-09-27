const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yellow.org',
  tagline: 'High performance spot trading exchange.',
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
        {to: '/#token', label: 'Token', position: 'left'},
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
              label: 'Overview',
              to: '/docs/overview/what-is-xln',
            },
            {
              label: 'Concepts',
              to: '/docs/concepts/architecture',
            },
            {
              label: 'Token Economics',
              to: '/docs/token-economics/overview',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap/milestones',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/yellow',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/yellow',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/yellow_org',
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
            'https://github.com/openware/yellow-org/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
