import {scrollToElement} from '../../lib/utils';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {useRouter} from 'next/router';

const NavDesktop = (props) => {
    const router = useRouter();
    const pathname = props?.router?.pathname || '';

    const handleRouting = (section) => {
        if (pathname === '/') {
            scrollToElement(section);
        } else {
            router.push(`/#${section}`, '');
        }
    };
    return (
        <div className="nav-desktop">
            <div className="knot-container">
                <img src="/knot_hall_of_fame.png" width="120" height="auto" />
            </div>
            <div className="link-container">
                <div className="logo">
                    <div>
                        <Link href="/">
                            <a>
                                <img src="RSDJS_horizontal_logo.png" />
                            </a>
                        </Link>
                        <div>Let's create your dream celebration</div>
                    </div>
                </div>
                <ul>
                    <li onClick={() => handleRouting('section-why')}>Why</li>
                   /*<li onClick={() => handleRouting('section-djs')}>DJs</li>*/
                    <li onClick={() => handleRouting('section-packages')}>Packages</li>
                    <li onClick={() => handleRouting('section-gallery')}>Gallery</li>
                    <li onClick={() => handleRouting('section-photobooth')}>
                        Photo Booth
                    </li>
                    <li>
                        <Link href="/faqs">
                            <a
                                title="FAQ"
                                style={{color: '#fff', textDecoration: 'none'}}>
                                FAQ
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a
                            className="knot-link"
                            href="https://www.theknot.com/marketplace/rockstar-djs-ballwin-mo-552134#reviews-area"
                            target="blank"
                            title="Read Our Reviews On the Knot">
                            <img
                                src="/the_knot-btn.png"
                                alt="The Knot Reviews"
                                width="160"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <style jsx>
                {`
                    .nav-desktop {
                        position: fixed;
                        display: grid;
                        grid-template-columns: 120px auto;
                        align-items: flex-start;
                        width: 100%;
                        z-index: 10;
                    }
                    .link-container {
                        background: linear-gradient(
                            to bottom,
                            rgb(20, 30, 48),
                            rgba(20, 30, 48, 0.9),
                            rgba(20, 30, 48, 0.6),
                            rgba(20, 30, 48, 0.3),
                            transparent
                        );
                        display: flex;
                        justify-content: space-between;
                    }
                    .logo {
                        display: flex;
                        align-items: center;
                        padding-left: 30px;
                        color: var(--orange);
                        font-family: var(--font-primary);
                        font-size: 12px;
                        font-weight: bold;
                        text-transform: capitalize;
                    }
                    .logo img {
                        margin-bottom: 5px;
                        display: block;
                    }
                    ul {
                        margin: 0;
                        font-family: var(--font-primary);
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;
                        list-style: none;
                        padding: 0 20px;
                        height: 100px;
                        font-weight: bold;
                    }
                    li {
                        width: 120px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        cursor: pointer;
                        border-top: 3px solid transparent;
                    }
                    li:hover {
                        border-top: 3px solid var(--interactive);
                    }
                    li:last-child {
                        width: auto;
                        cursor: auto;
                    }
                    li:last-child:hover {
                        border-top: 3px solid transparent;
                    }
                    .knot-container {
                        position: relative;
                    }
                    .knot-link {
                        display: flex;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    );
};
export default withRouter(NavDesktop);
