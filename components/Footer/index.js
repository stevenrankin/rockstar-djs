import Container from '../Container';
import Link from 'next/link';
import IconPhone from '../Svgs/icon-phone';
import IconMail from '../Svgs/icon-mail';
import IconLocation from '../Svgs/icon-location';
import {BREAKPOINT} from '../../lib/styles';

const Footer = (props) => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div className="footer__top">
                <div className="contact-container">
                    <div>
                        <div style={{fontSize: '22px', fontWeight: 'bold'}}>
                            Contact Us:
                        </div>
                        <div className="link">
                            <div>
                                <IconPhone fill="#fff" width="16" />
                            </div>
                            <a href="tel:+1-314-518-2407">314.518.2407</a>
                        </div>
                        <div className="link">
                            <div>
                                <IconMail width="20" fill="#fff" />
                            </div>
                            <div>
                                <a href="mailto:info@rockstardjs.com">
                                    info@rockstardjs.com
                                </a>
                            </div>

                        </div>
                        <div className="link">
                            <div>
                                <IconWeb width="20" fill="#fff" />
                            </div>
                            <div>
                                <a href="https://custompinayatas.com">
                                   Site beautifully designed by Custom Piñatas.
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="link">
                        <div>
                            <IconLocation fill="#fff" />
                        </div>
                        <div>
                            <span>St. Louis, MO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="logo-container">
                    <div>
                        <Link href="/">
                            <a>
                                <img src="/RSDJS_horizontal_logo.png" />
                            </a>
                        </Link>
                    </div>
                    <div>© {year}</div>
                </div>
            </div>
            <style jsx>
                {`
                    footer {
                        color: #fff;
                        font-family: var(--font-primary);
                    }
                    a {
                        color: #fff;
                    }
                    a:hover {
                        color: var(--orange);
                        transition: all 0.25s;
                    }
                    .link {
                        display: flex;
                        align-items: center;
                    }
                    .link > div:first-child {
                        margin-right: 10px;
                    }
                    .logo-container,
                    .contact-container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .footer__top {
                        background: #202020;
                        padding: 30px 15px;
                    }
                    .footer__bottom {
                        background: #000;
                    }
                    .contact-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .contact-container {
                            height: 60px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    }
                    .contact-container > div:first-child {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .contact-container > div:first-child {
                            display: flex;
                            align-items: center;
                        }
                    }
                    .contact-container > div:first-child > div {
                        margin-right: 50px;
                    }
                    .logo-container {
                        padding: 30px 0;
                        display: block;
                        text-align: center;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .logo-container {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    }
                `}
            </style>
        </footer>
    );
};
export default Footer;
