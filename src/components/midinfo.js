import PropTypes from "prop-types";
import styles from "./MidInfo.module.css";

const MidInfo = ({ className = "" }) => {
  return (
    <div className={[styles.midinfo, className].join(" ")}>
      <div className={styles.achinfo}>
        <div className={styles.achievements}>
          <div className={styles.click}>
            <i className={styles.clickToExpand}>  Click to expand</i>
          </div>
          <ul className={styles.stats}>
            <div className={styles.div}>
              <div className={styles.head}>
                <div className={styles.clickToExpand}>2019</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.content}>
                <img
                  className={styles.silverIcon}
                  alt=""
                  src="/silver@2x.png"
                />
                <div className={styles.silverMedal2ndContainer}>
                  <p className={styles.silverMedal2nd}>
                    Silver Medal (2nd position) in Team Event (Uttar Pradesh) in
                  </p>
                  <p className={styles.silverMedal2nd}>
                    National Championships, Dharmshala
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.head}>
                <div className={styles.clickToExpand}>2021</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.content1}>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.silverIcon}
                    alt=""
                    src="/bronze@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Bronze Medal (3rd position) in Individual Event in National
                    Ranking Tournament, Dehradun (Under-15)
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.silverIcon}
                    alt=""
                    src="/gold@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Gold Medal (1st position) in Individual Event in National
                    Championship, Indore (Under-15)
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-95@2x.png"
                  />
                  <div className={styles.indiaRank}>
                    INDIA RANK - 1 (Under 15 Category)
                  </div>
                  <img
                    className={styles.whatsappImage20240515At2}
                    alt=""
                    src="/waimg-1.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.head}>
                <div className={styles.clickToExpand}>2022</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.content2}>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.silverIcon}
                    alt=""
                    src="/bronze@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    <p
                      className={styles.silverMedal2nd}
                    >{`Bronze Medal (3rd position) in Individual Event in National Ranking Tournament, `}</p>
                    <p className={styles.silverMedal2nd}>Vadodara (Under-17)</p>
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-96@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India in WTT Youth Contender Tournament,
                    Helsingborg, Sweden.
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-97@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India at the Asian Junior Championship, Laos
                  </div>
                </div>
                <div className={styles.div9}>
                  <img
                    className={styles.whatsappImage20240515At21}
                    alt=""
                    src="/waimg-2.png"
                  />
                  <img
                    className={styles.whatsappImage20240515At22}
                    alt=""
                    src="/waimg-3.png"
                  />
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-98@2x.png"
                  />
                  <img
                    className={styles.silverIcon}
                    alt=""
                    src="/silver@2x.png"
                  />
                  <img
                    className={styles.silverIcon}
                    alt=""
                    src="/bronze@2x.png"
                  />
                  <div
                    className={styles.bronzeMedal3rd}
                  >{`Silver Medal (2nd position) in Under-17 Individuals and Bronze Medal (3rd position) in Under-17 Team event at the Samjhana Cup, Nepal `}</div>
                </div>
              </div>
            </div>
            <div className={styles.div11}>
              <div className={styles.head}>
                <div className={styles.clickToExpand}>2023</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.content}>
                <img
                  className={styles.silverIcon}
                  alt=""
                  src="/silver@2x.png"
                />
                <div className={styles.silverMedal2ndContainer1}>
                  <p className={styles.silverMedal2nd}>
                    Silver Medal (2nd position) in Individual Event in
                  </p>
                  <p className={styles.silverMedal2nd}>
                    National Ranking Tournament, Telangana (Under-17)
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div13}>
              <div className={styles.head}>
                <div className={styles.clickToExpand}>2024</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.content4}>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-99@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India in WTT Youth Contender Tournament Berlin,
                    Germany.
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-96@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India in WTT Youth Contender Tournament
                    Helsingborg, Sweden.
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-102@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India in WTT Youth Contender Tournament Amman,
                    Jordan.
                  </div>
                </div>
                <div className={styles.bronzeParent}>
                  <img
                    className={styles.image94Icon}
                    alt=""
                    src="/image-101@2x.png"
                  />
                  <div className={styles.bronzeMedal3rd}>
                    Represented India in WTT Youth Contender Tournament Almaty,
                    Kazakhstan.
                  </div>
                </div>
                <div className={styles.div19}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.div20}>239</div>
                  </div>
                  <div className={styles.currentInternationalRank}>
                    Current International Rank, Under-19
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

MidInfo.propTypes = {
  className: PropTypes.string,
};

export default MidInfo;
