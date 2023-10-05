import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { FaBrain, FaCode, FaToolbox } from "react-icons/fa";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <span>tools and languages i love to use:</span>
          </h4>
          <h4>
            <FaCode size="2.4rem" color="var(--brand)" />
            <span>languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">C</span>
            <span className="chip">Go</span>
            <span className="chip">Java</span>
            <span className="chip">SQL</span>
            <span className="chip">Rust</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaBrain size="2.4rem" color="var(--brand)" />
            <span>frameworks</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TensorFlow</span>
            <span className="chip">Spring Boot</span>
      
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>tools and databases</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git/GitHub</span>
            <span className="chip">AWS</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Google Cloud Platform (GCP)</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
