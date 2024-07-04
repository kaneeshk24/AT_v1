import Xslider from "../components/Xslider";
import Ytimeline from "../components/Ytimeline";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <><><div><div className={styles.footersectParent}>
      <div className={styles.footersect}>
        <img
          className={styles.footerAvani1}
          alt=""
          src="/footer-avani-1@2x.png" />
      </div>
      <div className={styles.myCoaches}>my coAches</div>
      <div className={styles.achievements}>
        <div className={styles.stats}>
          <div className={styles.years}>
            <button className={styles.button} id="19btn">
              <div className={styles.div}>2019</div>
              <div className={styles.child} />
            </button>
            <button className={styles.button} id="21btn">
              <div className={styles.div}>2021</div>
              <div className={styles.child} />
            </button>
            <button className={styles.button} id="22btn">
              <div className={styles.div}>2022</div>
              <div className={styles.child} />
            </button>
            <button className={styles.button} id="23btn">
              <div className={styles.div}>2023</div>
              <div className={styles.child} />
            </button>
            <button className={styles.button4} id="24btn">
              <div className={styles.div}>2024</div>
              <div className={styles.child} />
            </button>
          </div>
          <div className={styles.icons}>
            <div className={styles.icn}>
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
            </div>
            <div className={styles.inc}>
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-95@2x.png" />
              <img className={styles.silverIcon} alt="" src="/gold@2x.png" />
            </div>
            <div className={styles.inc}>
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-96@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-97@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-98@2x.png" />
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
            </div>
            <div className={styles.icn}>
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
            </div>
            <div className={styles.icn3}>
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-99@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-96@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-102@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-101@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.instruction}>
          <i className={styles.clickToExpand}>Click to expand</i>
        </div>
      </div>
      <div className={styles.achievements1}>
        <div className={styles.myAchievements}>my Achievements</div>
      </div>
      <div className={styles.aboutmebg}>
        <img className={styles.aboutimgIcon} alt="" src="/aboutimg@2x.png" />
      </div>
      <div className={styles.gradient3}>
        <div className={styles.gradient3Child} />
      </div>
      <div className={styles.gradient2}>
        <div className={styles.gradient2Child} />
      </div>
      <div className={styles.aboutdes}>
        <div className={styles.iHaveBeenContainer}>
          <p className={styles.iHaveBeen}>
            I have been an athlete since I was 8 years old, and I have been
            playing at the highest level since I was 11. I became the Under-15
            Indian National Champion, in May 2022, by winning the National
            Championships, 2021.
          </p>
          <p className={styles.iHaveBeen}>
            Since then, I have never looked back, and I have represented INDIA
            in the Junior Asian Championships, Laos, 2022; and have participated
            in a few WTT Youth Contender Tournaments, maintaining a World Rank
            of 239.
          </p>
        </div>
      </div>
      <div className={styles.herobg}>
        <img className={styles.heroimgIcon} alt="" src="/heroimg@2x.png" />
      </div>
      <div className={styles.gradient1}>
        <div className={styles.gradient1Child} />
      </div>
      <img className={styles.frameChild} alt="" src="/arrow-5.svg" />
      <div className={styles.intro2}>
        <div className={styles.iAmAn}>
          I am an Indian National Table Tennis Player
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.hiIAm}>Hi, I am Avani Tripathi</div>
      </div>
      <div className={styles.frameItem} />

      <div className={styles.navbar} id="navbar">
        <button className={styles.logo} id="logobtn">
          <img
            className={styles.avaniLogoCondensed1}
            alt=""
            src="/avani--logo-condensed-1@2x.png" />
        </button>
        <div className={styles.line}>
          <div className={styles.lineChild} />
        </div>
        <div className={styles.links}>
          <button className={styles.about} id="about">
            about
          </button>
          <button className={styles.achievements2} id="achievements">
            achievements
          </button>
        </div>
      </div>
    </div>
    </div>
    {/* <Xslider></Xslider></> */}</>
    <Ytimeline></Ytimeline></>

  );
};

export default Frame;

