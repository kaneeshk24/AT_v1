import { useEffect, useRef } from "react";
import styles from "./Ytimeline.module.css";

const escapeClassName = (className) => {
    return className.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '\\$&');
};

const Ytimeline = ({ className = "" }) => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.scrollY >= 4000) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        const containerLeftClass = escapeClassName(styles.containerLeft);
        const containerRightClass = escapeClassName(styles.containerRight);

        const elements = timelineRef.current.querySelectorAll(`.${containerLeftClass}, .${containerRightClass}`);
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.containerLeft}>
                <div className={styles.elipse} />
                <div className={styles.textbox}>
                    <div className={styles.h2}>Rajiv Dixit</div>
                    <div className={styles.small}>2017-2018</div>
                    <div className={styles.p}>
                    I started my journey under Rajeev sir. He taught me how to hold the racket, how to hit the ball, when I did not even know of this sport properly....
                    </div>
                </div>
            </div>

            <div className={styles.containerRight}>
                <div className={styles.elipseRt} />
                <div className={styles.textbox}>
                    <div className={styles.h2}>Vibhore Khare</div>
                    <div className={styles.small}>2018-2020</div>
                    <div className={styles.p}>
                    It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself.
                    </div>
                </div>
            </div>

            <div className={styles.containerLeft}>
                <div className={styles.elipse} />
                <div className={styles.textbox}>
                    <div className={styles.h2}>Nikita Kapur</div>
                    <div className={styles.small}>2020-2024</div>
                    <div className={styles.p}>
                    It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself.
                    </div>
                </div>
            </div>

            <div className={styles.containerRight}>
                <div className={styles.elipseRt} />
                <div className={styles.textbox}>
                    <div className={styles.h2}>Raman Subrahmanyan</div>
                    <div className={styles.small}>2024</div>
                    <div className={styles.p}>
                    It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ytimeline;
