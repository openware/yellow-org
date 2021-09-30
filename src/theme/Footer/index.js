/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';

function FooterLink({
    to,
    href,
    label,
    prependBaseUrlToHref,
    ...props
}) {
    const toUrl = useBaseUrl(to);
    const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});

    return (
        <Link
            className="footer__link-item"
            {...(href
                ? {
                        href: prependBaseUrlToHref ? normalizedHref : href,
                    }
                : {
                        to: toUrl,
                    })}
            {...props}>
            {href && !isInternalUrl(href) ? (
                <span>
                    {label}
                    <IconExternalLink />
                </span>
            ) : (
                label
            )}
        </Link>
    );
}

const FooterLogo = ({
    sources,
    alt,
}) => (
    <ThemedImage className={clsx('footer__logo', styles.footerLogo)} alt={alt} sources={sources} />
);

function Footer() {
    const {footer} = useThemeConfig();

    const {copyright, links = [], logo = {}} = footer || {};
    const sources = {
        light: useBaseUrl(logo.src),
        dark: useBaseUrl(logo.srcDark || logo.src),
    };

    if (!footer) {
        return null;
    }

    return (
        <footer
            className={clsx('footer', {
                'footer--dark': footer.style === 'dark',
            })}>
            <div className="container">
                {links && links.length > 0 && (
                    <div className="row footer__links">
                        <div className="col col--4 footer__col footer__overview">
                            {logo && (logo.src || logo.srcDark) && (
                                <div>
                                    {logo.href ? (
                                        <Link href={logo.href} className={styles.footerLogoLink}>
                                            <FooterLogo alt={logo.alt} sources={sources} />
                                        </Link>
                                    ) : (
                                        <FooterLogo alt={logo.alt} sources={sources} />
                                    )}
                                </div>
                            )}
                            <p className={clsx('body-2-14-400 margin-bottom--md', styles.footerText)}>
                                Yellow.org is a hybrid exchange that combines the benefits of centralized and decentralized worlds. Come and join the future of the financial system!
                            </p>
                            <div className={styles.footerSocials}>
                                <Link to="https://www.reddit.com/r/yellow_defi/"><img src={useBaseUrl('/img/icons/reddit.svg')} loading="lazy" /></Link>
                                <Link to="https://twitter.com/yellow_defi"><img src={useBaseUrl('/img/icons/twitter-white.svg')} loading="lazy" /></Link>
                                <Link to="https://medium.com/yellow-blog"><img src={useBaseUrl('/img/icons/medium.svg')} loading="lazy" /></Link>
                                <Link to="https://t.me/yellow_org"><img src={useBaseUrl('/img/icons/telegram-white.svg')} loading="lazy" /></Link>
                            </div>
                        </div>
                        {links.map((linkItem, i) => (
                            <div key={i} className="col footer__col">
                                {linkItem.title != null ? (
                                    <div className="footer__title">{linkItem.title}</div>
                                ) : null}
                                {linkItem.items != null &&
                                Array.isArray(linkItem.items) &&
                                linkItem.items.length > 0 ? (
                                    <ul className="footer__items">
                                        {linkItem.items.map((item, key) =>
                                            item.html ? (
                                                <li
                                                    key={key}
                                                    className="footer__item"
                                                    // Developer provided the HTML, so assume it's safe.
                                                    // eslint-disable-next-line react/no-danger
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.html,
                                                    }}
                                                />
                                            ) : (
                                                <li key={item.href || item.to} className="footer__item">
                                                    <FooterLink {...item} />
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        ))}
                    </div>
                )}
                {copyright && (
                    <div className="footer__bottom text--center">
                        {copyright ? (
                            <div
                                className="footer__copyright"
                                // Developer provided the HTML, so assume it's safe.
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: copyright,
                                }}
                            />
                        ) : null}
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
