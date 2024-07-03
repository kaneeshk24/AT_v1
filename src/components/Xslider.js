import PropTypes from "prop-types";
import styles from "./Xslider.module.css";

const Xslider = ({ className = "" }) => {
  return (
    <div className={[styles.xslider, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.groupParent}>
          <div className={styles.parent}>
            <div className={styles.div}>2017</div>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
          </div>
          <div className={styles.group}>
            <div className={styles.div1}>2018</div>
            <div className={styles.ellipseDiv} />
            <div className={styles.groupChild1} />
          </div>
          <div className={styles.container}>
            <div className={styles.div1}>2019</div>
            <div className={styles.ellipseDiv} />
            <div className={styles.groupChild1} />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.div3}>2020</div>
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.parent1}>
            <div className={styles.div4}>2021</div>
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
          <div className={styles.parent2}>
            <div className={styles.div5}>2022</div>
            <div className={styles.groupChild8} />
            <div className={styles.groupChild9} />
          </div>
          <div className={styles.parent3}>
            <div className={styles.div6}>2023</div>
            <div className={styles.groupChild10} />
            <div className={styles.groupChild11} />
          </div>
          <div className={styles.parent4}>
            <div className={styles.div6}>2024</div>
            <div className={styles.groupChild10} />
            <div className={styles.groupChild11} />
          </div>
        </div>

        <div className={styles.div8}>
          <b className={styles.rajivDixit}>{`Rajiv Dixit `}</b>
          <div className={styles.iStartedMy}>
            I started my journey under Rajeev sir. He taught me how to hold the
            racket, how to hit the ball, when I did not even know of this sport
            properly....
          </div>
        </div>
        <div className={styles.div9}>
          <b className={styles.rajivDixit}>Vibhore Khare</b>
          <div
            className={styles.iStartedMy}
          >{`It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself. `}</div>
        </div>
        <div className={styles.div10}>
          <b className={styles.rajivDixit}>Nikita Kumar</b>
          <div
            className={styles.iStartedMy}
          >{`It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself. `}</div>
        </div>
        <div className={styles.div11}>
          <b className={styles.rajivDixit}>Raman Subrahmanyan</b>
          <div
            className={styles.iStartedMy}
          >{`It took me a while to start taking Table Tennis seriously and it was under Vibhore sir when I actually started to put extra efforts and push myself. `}</div>
        </div>
      </div>
    </div>
  );
};

Xslider.propTypes = {
  className: PropTypes.string,
};

export default Xslider;
