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
    title: "Queue Enterprises",
    position: "Information Technology Engineer",
    time: "May 2023 - Present",
    location: "Toronto, ON",
    description: 
    `Designing and implementing cost efficient, highly available, secure, fault tolerant and scalable cloud native Information Technology solutions within Google Cloud Platform
`,
    tech: [
      "Python",
      "Google Cloud Platform (GCP)",
      "Go",
      "Open ai",
      "PostgreSQL",
      "Redis",
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
    title: "Parking Legends",
    position: "Volunteer Junior Android Engineer",
    time: "June 2019 - July 2019",
    location: "North York, ON",
    description: 
    `http://parkinglegends.com/www/easypark/index.php:
    implemented features for a scalable android application to find parking spaces
`,
    tech: [
      "Java",
      "Android Studio",
      "Kotlin",
    ],
  },
     
    {
      title: "Ferina Office",
      position: "Store Administrator",
      time: "May 2015 - September 2015",
      location: "Dar es salaam, TZ",
      description: 
      `Working with printers, scanners and other office adminitrative equipment to provide services to customers`,
      tech: [
        "Drivers",
        "Printers",
        "Scanners",
        "Photocopy Machines",
        "Microsoft Office",
        "Portable Point Of Sale System",
      ],
    },

    ]
