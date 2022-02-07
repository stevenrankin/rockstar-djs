import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {useRef} from 'react';
import djsBackupData from '../../lib/packages.json';

const getPackageItems = (obj) => {
    if (!obj || typeof obj !== 'object') return [];
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
        if (key !== 'id' && key !== 'title' && value) {
            arr.push(value);
        }
    }
    return arr;
};

const SectionPackages = (props) => {
    const data = djsBackupData || [];

    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    // package one
    const packageOne = data?.[0] || [];
    const packageOneTitle = packageOne?.title || '';
    const packageOneItems = getPackageItems(packageOne);

    // package two
    const packageTwo = data?.[1] || [];
    const packageTwoTitle = packageTwo?.title || '';
    const packageTwoItems = getPackageItems(packageTwo);

    // package three
    const packageThree = data?.[2] || [];
    const packageThreeTitle = packageThree?.title || '';
    const packageThreeItems = getPackageItems(packageThree);

    const animatedClass = onScreen ? 'animate__animated animate__fadeIn ' : '';

    return (
        <section id="section-packages">
            <Container>
                <SectionHeader title="Packages" />
                <div ref={ref} className={`card-container ${animatedClass}`}>
                    <div className="card">
                        <img src="/standard_package.gif" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageOneTitle}}
                        />
                        <ul>
                            {Array.isArray(packageOneItems) &&
                                packageOneItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/premium_package.gif" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageTwoTitle}}
                        />
                        <ul>
                            {Array.isArray(packageTwoItems) &&
                                packageTwoItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/rockstar_package.gif" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageThreeTitle}}
                        />{' '}
                        <ul>
                            {Array.isArray(packageThreeItems) &&
                                packageThreeItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <div className="disclaimer">* Choose your DJ, Choose Quain Tull as your DJ, Ceremoney Music, Monogram, Uplighting, Photobooth.</div>
            </Container>
            <style jsx>
                {`
                    #section-packages {
                        background: var(--gray-100);
                    }
                    .card-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 30px;
                        }
                    }
                    .card {
                        width: 100%;
                        background: #fff;
                        border-radius: 5px;
                        border: 1px solid var(--gray-200);
                        padding: 15px;
                        margin-bottom: 30px;
                        box-shadow: 0px 2px 16px rgba(000, 000, 000, 0.1);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card {
                            margin-bottom: 0px;
                        }
                    }
                    .card img {
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                    }
                    .card__title {
                        font-family: var(--font-primary);
                        margin-bottom: 15px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 28px;
                        height: 56px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .card ul {
                        margin: 0;
                        list-style: none;
                    }
                    .card li:first-child {
                        border-radius: 4px 4px 0 0;
                    }
                    .card li:last-child {
                        border-radius: 0 0 4px 4px;
                    }
                    .card li {
                        font-family: var(--font-secondary);
                        padding: 3px 15px;
                        text-align: center;
                        border: 1px solid var(--gray-200);
                    }
                    .card li:nth-child(odd) {
                        background: var(--gray-200);
                    }
                    .card__note {
                        font-size: 12px;
                    }
                    .disclaimer {
                        text-align: center;
                        margin-top: 15px;
                        font-size: 14px;
                        color: #a1a1a1;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionPackages;
