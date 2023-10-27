import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hello world⚡, i&apos;m eric. i&apos;m a young adult entering my mid 20&apos;s
              with a burning desire to build useful technologies. i strive to craft solutions that bring value to users' lives.
             
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              outside of Software, my interests meander in design, art,
              and health. you might find me painting🎨, or reading philosophy. 
            </p>
          </Reveal>
          <Reveal>
            <div>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                now:
              </p>
              <p className={styles.aboutText}>
                i&apos;m a computer science graduate from York University🎓.
                also working on getting cloud☁️ certified
              </p>
              
        
              <p className={styles.aboutText}>
                focusing on learning new technologies and delving 
                deeper into machine learning and artificial intelligence🤖. 
              </p>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                worked in an information technology administrator role👨🏿‍💻. 

              </p>
              
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
