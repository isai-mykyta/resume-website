import { FC } from "react";

import Aside from "./components/Aside";
import Container from "./components/Container";
import ExperienceCard from "./components/ExperienceCard";
import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section";
import Skills from "./components/Skills";

const experience = [
  {
    position: "Front End Developer",
    location: "Ukraine, Kremenchuck",
    companyName: "Madappgang",
    url: "https://madappgang.com",
    period: {
      from: new Date(2020, 1).getTime(),
      to: new Date(2022, 0).getTime()
    },
    summary: "As a front end developer, I built high-performance web applications using React.js, Gatsby.js, JavaScript, HTML, and CSS. I optimized content workflows with Prismic CMS and deployment on Netlify, ensuring fast-loading and SEO-friendly sites. I collaborated on UI/UX improvements, system integrations, and internal tools, enhancing workflow management and user experience.",
    insights: [
      "Internal Web Portal Development – Designed a system for employee monitoring, growth planning, and task management",
      "Corporate Website Creation – Built and optimized the Madappgang website using Gatsby.js, React.js, and Prismic.",
      "Restaurant Management Web App – Led front-end development, ensuring a seamless UI/UX experience.",
      "Tech Stack – Proficient in JavaScript, TypeScript, React.js, Gatsby.js, HTML, CSS, Prismic, and Netlify."
    ]
  },
  {
    position: "Node.js Developer",
    location: "Remote, Ukraine",
    companyName: "SPD Technology",
    url: "https://spd.tech/",
    period: {
      from: new Date(2022, 0).getTime(),
      to: new Date(2023, 7).getTime(),
    },
    summary: "As a Node.js developer at SPD-Ukraine, I contributed to the development of an all-in-one payment platform that provides businesses with a range of benefits. This platform features contactless, fast, secure, and safe payment processing solutions.",
    insights: [
      "API Development – Designed and implemented RESTful APIs, ensuring seamless integration between platform components.",
      "Legacy Code Refactoring – Participated in refactoring and stabilizing a large legacy codebase, improving maintainability and performance.",
      "Unit & Integration Testing – Introduced a comprehensive suite of unit and integration tests, enhancing system reliability and reducing regression issues.",
      "Cross-Team Collaboration – Worked with international teams based in the US and Brazil to streamline development processes and ensure smooth project execution."
    ]
  },
  {
    position: "Node.js Developer",
    location: "Remote, Ukraine",
    companyName: "Spirii",
    url: "https://www.spirii.com/en",
    period: {
      from: new Date(2023, 7).getTime(),
    },
    summary: "As a Node.js developer, I worked on backend solutions in the EV charging domain, focusing on CPMS infrastructure, OCPP communication, and scalable architecture. I contributed to API development, WebSocket services, and automation while collaborating with international teams to deliver robust and maintainable solutions.",
    insights: [
      "EV Charging Solutions – Played a key role in developing Charge Point Management System (CPMS) infrastructure, enabling seamless communication between EV chargers and backend systems using OCPP.",
      "Plug & Charge Authentication – Developed an API for EV and charger authentication following ISO 15118 standards.",
      "Firmware Management – Implemented an API service for managing firmware updates on charging stations.",
      "Microservices & Scalability – Contributed to application design, deployment processes, and microservices architecture planning, ensuring scalability and maintainability.",
      "End-to-End Development – Led end-to-end solutions from prototyping to production deployment.",
      "WebSocket Communication – Built a scalable WebSocket service for managing a large network of EV chargers, ensuring efficient OCPP 1.6 communication.",
      "Global Collaboration – Worked closely with teams from Scandinavian countries to deliver robust and scalable solutions."
    ]
  }
];

const skills = [
  {
    type: "Front End",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Gatsby.js",
      "HTML",
      "CSS",
      "SCSS",
      "Redux",
      "Storybook",
      "Jest",
      "Cypress",
      "Headless CMS"
    ]
  },
  {
    type: "Back End",
    skills: [
      "Express.js",
      "Nest.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "REST API",
      "WebSocket",
      "Microservices",
      "RabbitMQ",
      "MongoDB",
      "MySQL",
      "Docker",
      "CI/CD",
      "Unit Testing",
      "Integration Testing"
    ]
  }
];

const App: FC = () => {
  return (
    <Container>
      <Aside>
        <ProfileCard />
      </Aside>
      <main className="main">
        <h4>Background</h4>
        <hr />
        <div className="main__sections">
          <Section title="About">
            <p>A highly self-motivated JavaScript developer with extensive experience in architecting, designing, developing, and testing web applications. Passionate about coding, problem-solving, and optimizing user experiences while staying up to date with the latest industry trends and technologies.</p>
          </Section>
          <Section title="Work experience">
            {experience.map((exp) => <ExperienceCard key={exp.companyName} {...exp} />)}
          </Section>
          <Section title="Skills">
            {skills.map((skill) => (<Skills key={skill.type} {...skill} />))}
          </Section>
          <Section title="Languages">
            <div className="main__languages">
              <p>Ukrainian (Native)</p>
              <p>English (Upper Intermediate)</p>
            </div>
          </Section>
        </div>
      </main>
    </Container>
  );
};

export default App;
