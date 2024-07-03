import styles from "./Ytimeline.module.css";

const Ytimeline = ({ className = "" }) => {
    return(
        <div className={styles.timeline}>
            <div className={styles.container}>
                <div className={styles.textbox}>
                    <div className={styles.h2}>Rajiv Dixit</div>
                    <div className={styles.small}>2017</div>
                    <div className={styles.p}>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem</div>
                </div>
            </div>
        </div>

    );
};

export default Ytimeline;
