import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Queue",
    position: "Founder, CTO, Lead Programmer",
    time: "May 2023 - Present",
    location: "Toronto, ON",
    description: 
    `Established an audio-tech startup focused on addressing challenges impaired users face while accessing and managing information on the web.
    Conceptualized, developed, and deployed a dynamic and responsive MVP with novel features extracted from interviews with potential users.
    Spearheaded the design of a scalable infrastructure on GCP with optimized data storage, laying foundation for future data analytics capabilities and minimizing GCP costs by 27.18%.
    Established relationships with partners for software licensing aggreements. 
`,
    tech: [
      "Python",
      "Google Cloud Platform (GCP)",
      "Go",
      "Open ai",
      "Amazon Code Whisperer",
      "Virtuoso",
      "PostgreSQL",
      "Rust",
      "Git"
    ],
  },
  {
    title: "York University",
    position: "information technology administrator",
    time: "september 2019 - april 2020",
    location: "Toronto, ON",
    description: `Provisioned Information Technology support for a team of 30+ office personnel using a ticketing system; servicing hardware, software and network technical support, mitigating risk of downtime by 27%.
    Collaborated in a cross-functional team to ship new features for the company website.
    Registered new workstation users onto the company network ensuring the right credentials and permissions are provisioned for each user.
    Performed routine data back up for company servers and website as well as liaising with software vendors for software purchases.
    Frequent monitoring and auditing of connected devices; TVs, landlines, 2+ on-premise servers and over 30+ connected workstation computers on both windows and Linux as well as creating technical and functional documentation for workstation users and IT personnel.
`,
    tech: ["Vmware esxi", "Windows server", "Active Directory", "BrightSign", "Google Workspace", "Wordpress", "CrashPlan", "Windows Credentials"],
  },
  {
    title: "Genesis Hackathon",
    position: "Backend engineer",
    time: "June 2019",
    location: "Toronto, ON",
    description: `Developed a solution to provide new comers in Canada with answers to frequently asked questions about the area\n
    fine-tuned Genesis' proprietary natural language model with question and answer pairs using http posts to their api over tcp.\n
    developed a nosql database to store new questions for further model fine-tuning.`,
    tech: ["Genesis API", "NoSQL", "Python", "Postman"],
  },
];
