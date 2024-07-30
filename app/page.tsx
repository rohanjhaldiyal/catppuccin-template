import type { SVGProps } from "react";
import { mockResumeData } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-8 px-4">
      <DeployButton />
      <Header />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Languages />
      <VolunteerWork />
      <Publications />
      <Awards />
      <Achievements />
      <OtherTechExperience />
      <References />
    </div>
  );
}

// comment out the below code if you don't want the deploy button
function DeployButton() {
  return (
    <>
      <span className="text-ctp-text">Deploy Catppuccin Template to Vercel</span>
      <a href="https://vercel.com/new/clone?repository-url=https://github.com/rohanjhaldiyal/catppuccin-template">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>
    </>
  );
}

function Header() {
  return (
    <div className="bg-ctp-crust w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-ctp-mauve mb-4 sm:mb-0">
            {mockResumeData.personalInfo.name}
          </h1>
          <div className="flex flex-row gap-4">
            <Link
              href={mockResumeData.personalInfo.website}
              target="_blank"
              className="text-ctp-mauve hover:text-ctp-blue"
            >
              <Website className="h-6 w-6" />
            </Link>
            <Link
              href={mockResumeData.personalInfo.github}
              target="_blank"
              className="text-ctp-mauve hover:text-ctp-blue"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href={mockResumeData.personalInfo.linkedin}
              target="_blank"
              className="text-ctp-mauve hover:text-ctp-blue"
            >
              <LinkedIn className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4 flex-wrap">
          <h2 className="text-lg text-ctp-lavender flex items-center">
            <Email className="h-6 w-6 text-ctp-teal" />
            <span className="ml-2">{mockResumeData.personalInfo.email}</span>
          </h2>
          <h2 className="text-lg text-ctp-lavender flex items-center">
            <Phone className="h-6 w-6" />
            <span className="ml-2">{mockResumeData.personalInfo.phone}</span>
          </h2>
          <h2 className="text-lg text-ctp-lavender flex items-center">
            <Location className="h-6 w-6" />
            <span className="ml-2">{mockResumeData.personalInfo.location}</span>
          </h2>
        </div>

        <h2 className="text-ctp-teal text-xl">{mockResumeData.summary}</h2>
      </div>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>Work Experience</span>
      </h2>
      {mockResumeData.workExperience.map((experience, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <h3 className="text-ctp-teal text-xl font-bold">
              {experience.title}
            </h3>
            <h4 className="text-ctp-blue text-lg">{experience.company}</h4>
            <div className="text-ctp-subtext0 text-sm">
              <span>{experience.location}</span>
              <span className="mx-2">|</span>
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="text-ctp-mauve font-semibold mb-2">
              Responsibilities:
            </h5>
            <ul className="list-disc list-inside space-y-1">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-ctp-text">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {experience.achievements.length > 0 && (
            <div>
              <h5 className="text-ctp-mauve font-semibold mb-2">
                Key Achievements:
              </h5>
              <ul className="list-disc list-inside space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-ctp-text">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        <span>Education</span>
      </h2>
      {mockResumeData.education.map((education, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <h3 className="text-ctp-teal text-xl font-bold">
              {education.degree}
            </h3>
            <h4 className="text-ctp-blue text-lg">{education.institution}</h4>
            <div className="text-ctp-subtext0 text-sm">
              <span>{education.location}</span>
              <span className="mx-2">|</span>
              <span>{education.year}</span>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="text-ctp-mauve font-semibold mb-2">
              Relevant Courses:
            </h5>
            <ul className="list-disc list-inside space-y-1">
              {education.relevantCourses.map((course, index) => (
                <li key={index} className="text-ctp-text">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-ctp-mauve font-semibold mb-2">GPA:</h5>
            <p className="text-ctp-text">{education.gpa}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Skills
      </h2>
      {mockResumeData.skills.map((skillCategory, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold mb-4">
            {skillCategory.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillCategory.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="bg-ctp-surface1 text-ctp-text px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        Projects
      </h2>
      {mockResumeData.projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <h3 className="text-ctp-teal text-xl font-bold">{project.name}</h3>
            <p className="text-ctp-text mt-2">{project.description}</p>
          </div>

          <div className="mb-4">
            <h5 className="text-ctp-mauve font-semibold mb-2">Technologies:</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-ctp-surface1 text-ctp-text px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={project.link}
            target="_blank"
            className="text-ctp-blue hover:text-ctp-lavender flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
}

function Certifications() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <span>Certifications</span>
      </h2>
      {mockResumeData.certifications.map((cert, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">{cert.name}</h3>
          <p className="text-ctp-text mt-2">Issuer: {cert.issuer}</p>
          <p className="text-ctp-text">Date: {cert.date}</p>
          <p className="text-ctp-text">Expiry: {cert.expiryDate}</p>
        </div>
      ))}
    </div>
  );
}

function Languages() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>Languages</span>
      </h2>
      <div className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md">
        {mockResumeData.languages.map((lang, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="text-ctp-teal text-xl font-bold">{lang.language}</h3>
            <p className="text-ctp-text mt-2">
              Proficiency: {lang.proficiency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VolunteerWork() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>Volunteer Work</span>
      </h2>
      {mockResumeData.volunteerWork.map((work, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">
            {work.organization}
          </h3>
          <p className="text-ctp-text mt-2">Role: {work.role}</p>
          <p className="text-ctp-text">
            Duration: {work.startDate} - {work.endDate}
          </p>
          <p className="text-ctp-text mt-2">{work.description}</p>
        </div>
      ))}
    </div>
  );
}

function Publications() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <span>Publications</span>
      </h2>
      {mockResumeData.publications.map((pub, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">{pub.title}</h3>
          <p className="text-ctp-text mt-2">
            Authors: {pub.authors.join(", ")}
          </p>
          <p className="text-ctp-text">Journal: {pub.journal}</p>
          <p className="text-ctp-text">Date: {pub.date}</p>
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctp-blue hover:text-ctp-lavender mt-2 inline-block"
          >
            View Publication
          </a>
        </div>
      ))}
    </div>
  );
}

function Awards() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <span>Awards</span>
      </h2>
      {mockResumeData.awards.map((award, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">{award.title}</h3>
          <p className="text-ctp-text mt-2">Issuer: {award.issuer}</p>
          <p className="text-ctp-text">Date: {award.date}</p>
          <p className="text-ctp-text mt-2">{award.description}</p>
        </div>
      ))}
    </div>
  );
}

function Achievements() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <span>Achievements</span>
      </h2>
      {mockResumeData.achievements.map((achievement, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">
            {achievement.title}
          </h3>
          <p className="text-ctp-text mt-2">{achievement.description}</p>
          <p className="text-ctp-text">Date: {achievement.date}</p>
        </div>
      ))}
    </div>
  );
}

function OtherTechExperience() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <span>Other Technical Experience</span>
      </h2>
      {mockResumeData.otherTechExperience.map((exp, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md"
        >
          <h3 className="text-ctp-teal text-xl font-bold">{exp.title}</h3>
          <p className="text-ctp-text mt-2">{exp.description}</p>
          <p className="text-ctp-text">Duration: {exp.duration}</p>
          <div className="mt-2">
            <h4 className="text-ctp-mauve font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-ctp-surface1 text-ctp-text px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctp-blue hover:text-ctp-lavender mt-2 inline-block"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

function References() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-ctp-mauve text-2xl font-bold mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span>References</span>
      </h2>
      <div className="mb-8 p-6 bg-ctp-surface0 rounded-lg shadow-md">
        {mockResumeData.references.map((reference, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="text-ctp-teal text-xl font-bold">
              {reference.name}
            </h3>
            <p className="text-ctp-text">Relation: {reference.relation}</p>
            <p className="text-ctp-text">Company: {reference.company}</p>
            <p className="text-ctp-text">{reference.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="currentColor"
    />
  </svg>
);

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

const Website = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
    />
  </svg>
);

const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

const Location = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
