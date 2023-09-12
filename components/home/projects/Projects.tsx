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
    title: "LipNet",
    imgSrc: "/project-imgs/lipnet.png", //642 x 408
    code: "https://github.com/whyismynamerudy/LipNet",
    projectLink: "",
    tech: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
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
        <p>
          The model utilizes a Convolutional 3D (Conv3D) neural network combined with 
          Long Short-Term Memory (LSTM) layers, making it suitable for processing video 
          data with temporal dependencies. The data transformation pipeline involves 
          loading video files, extracting frames, converting them to grayscale, and 
          normalizing the data. Additionally, the 
          pipeline handles text data, converting characters to numeric representations, 
          which is crucial for training the model. I developed this model by following along
          the paper titled &quot;LipNet: End-to-End Sentence-level Lipreading&quot; [<a target="_blank" href="https://arxiv.org/abs/1611.01599">https://arxiv.org/abs/1611.01599</a>].
        </p>
        <p>
          There were challenges during the development of this project - two of the biggest
          issues were with some incompatibilities with some dependencies of the TensorFlow
          version I was using and with computational limitations on my laptop. The former issue
          was fixed by using older verisons of TensorFlow (albeit after a lot of debugging and 
          browsing StackOverflow). To fix the latter issue, I discovered some weights for this 
          architecture online, but to use them I had to use LSTM layers within my model instead of 
          Gated Recurrent Units (GRU) layers since they were trained as such.
        </p>
        <p style={{ fontStyle: "italic" }}>
          I learn the best by doing - as such, a project with 
          applications in improved hearing aids, silent dictation in public spaces, etc., was 
          an excellent introduction to deep learning for me.
        </p>
      </>
    ),
  },
  {
    title: "Spotify MultiSelect",
    imgSrc: "/project-imgs/spotify-multiselect.png",
    code: "https://github.com/whyismynamerudy/spotify-multiselect",
    projectLink: "https://spotify-multiselect.vercel.app/",
    tech: ["TypeScript, Next.js, React.js, Tailwind CSS"],
    description:
      "Add multiple tracks to a playlist at once.",
    modalContent: (
      <>
        <p>
          Engineered a solution that addresses a gap in the current Spotify application
          ecosystem: adding multiple tracks to a playlist at once.
        </p>
        <p>
          Utilized the Spotify API to concurrently add tracks to a playlist, achieveing a
          67.11% reduction in track addition time, yeilding an average time-saving of
          4.77 seconds per track.
        </p>
        <p style={{ fontStyle: "italic" }}>
          I&apos;ve found myself wishing for such a feauture multiple times now, so I built it
          myself! It was my first time using Next.js and TailwindCSS, and I don&apos;t see myself not
          using them in the future anytime soon. P.S. the Spotify API has some of the best 
          documentation I&apos;ve seen!
        </p>
      </>
    ),
  },
  {
    title: "PortAudio",
    imgSrc: "/project-imgs/portaudio.png",
    code: "https://github.com/whyismynamerudy/portaudio",
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
          representation (UInt32 (U = unsigned), Int32, UInt16, etc.). Fine-tuned conversion functions
          to handle different bit representation, and consequently, bit manipulation on different machines. 
        </p>
        <p style={{ fontStyle: "italic" }}>
          Trying to contribute to this project was really fun as I had to spend a lot of 
          time learning new concepts, exploring the vast codebase, and communicating with other developers, which helped
          me to better my own coding skills as well.
        </p>
      </>
    ),
  },
  
];
