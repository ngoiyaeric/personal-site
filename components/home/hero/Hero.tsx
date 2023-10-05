import { StandardButton } from "@components/buttons/StandardButton";
import { Reveal } from "@components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import anime from "animejs";

export const Hero = () => {

  // const shake = anime({
  //   targets: '#secure',
  //   easing: 'easeInOutSine',
  //   duration: 550,
  //   translateX: [
  //     {
  //       value: 16 * -1,
  //     },
  //     {
  //       value: 16,
  //     },
  //     {
  //       value: 16/-2,
  //     },
  //     {
  //       value: 16/2,
  //     },
  //     {
  //       value: 0
  //     }
  //   ],
  // });

  // const handleSecureClick = (e: any) => {
  //   shake.restart();
  // }

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            hi, i&apos;m E<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            welcome to my <span>little corner of the world wide web</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className={styles.aboutCopy}>
            <p>
              -&gt; compsci graduate from york university <br /> <br /> 
              -&gt; building <span>impactful</span>, <span>scalable</span>, and <span>secure</span> software <br /> <br /> 
              -&gt; passionate about machine learning, backend development, &emsp; and infrastructure.
           
            </p>
            <br />
            <p>let&apos;s connect!</p>
          </div>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
             contact
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
