import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "Linux" },
  { skill: "Android" },
  { skill: "Swift" },
  { skill: "Node.js" },
  { skill: "Firebase" },
  { skill: "MongoDB" },

]


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
           <p>
              Hi, my name is Apurva and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in San Francisco, CA.
            </p>
            <br />
            <p>
              I&apos;m an upcoming graduate from California State University, East Bay
            with a keen interest in software development and a strong desire to make a positive impact on people&apos;s lives. My ultimate goal is to apply the concepts that I have learned through my academic program to real-world projects<br />
            <br />
            As of now, I am employed as a specialist at Apple in Palo Alto, where I collaborate closely with cross-functional teams such as Technicians, Operations and Business Experts, Geniuses, and Creatives. In my spare time, I enjoy working on side projects, where I actively seek to contribute and learn as much as possible, leveraging my visual learning skills to enhance my knowledge and understanding. 
            <br />
            <br />
            My ultimate objective is to utilize my skills in software development to make a meaningful impact, and I am highly motivated to achieve this through any means possible.
          </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
