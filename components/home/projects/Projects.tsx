import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};


const projects = [
  {
    title: "Project",
    imgSrc: "", //642 x 408
    code: "https://github.com/link",
    projectLink: "",
    tech: ["tech", "tech", "tech", "Mtech"],
    description:
      "An end-to-end sentence-level lipreading model capable of mapping a variable-length sequence of video frames to text.",
    modalContent: (
      <>
        <p>
          I developed a deep learning model and a data transformation pipeline using 
          TensorFlow that is able to process video data and predict the spoken words
          present in the video with an accuracy of 92.3%; my first exploration of deep
          learning!
        </p>
      </>
    ),
  },
  {
    title: "Tesla Battery Visualizer",
    imgSrc: "./images/Tbattery.png",
    code: "https://github.com/ngoiyaeric/personal-site",
    projectLink: "https://battery-visualizer.vercel.app/",
    tech: ["Javascript, Redux.js, React.js, Tailwind CSS"],
    description:
      "View battery health under various conditions.",
    modalContent: (
      <>
        <p>
          Visualizer tool for checking battery health for Tesla cars so users can predict battery
          health in various weather conditions using react.js components and redux.js for state management Tools: React,
          Redux & Vercel Link: battery visualizer
        </p>
        <p style={{ fontStyle: "italic" }}>
          I&apos;wonder how a real time version of this application would work, perhaps I would need to learn abit of electrical engineering to understand that. 
        </p>
      </>
    ),
  },
  {
    title: "PortAudio",
    imgSrc: "/project-imgs/portaudio.png",
    code: "https://github.com/PortAudio/portaudio/pull/841",
    projectLink: "http://www.portaudio.com",
    tech: ["C/C++"],
    description:
      "A portable audio I/O library designed for cross-platform support of audio.",
    modalContent: (
      <>
        <p>
          Contributed to an open-source audio library by developing data conversion functions
          between custom integer representations to facilitate communication with external 
          audio software. 
        </p>
        <p>
          Utilized dithering, the process of adding white noise to reduce 
          distortion of low-amplitude signals, to convert between different integer 
          representation (UInt8 (U = unsigned), Int32). Fine-tuned conversion functions
        </p>
  
      </>
    ),
  },
  
];
