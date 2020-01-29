import React from "react";
import "./styles.css";
import ResumeItem from "./ResumeItem";
import TimeRangeBlock from "./TimeRangeBlock";
import MyInfo from "./Components/MyInfo";
import SkillBars from "./Components/SkillsBar";
import ProfileImg from "./Components/ProfileImg";

const experience = [
  {
    startDate: new Date("1998-06-06"),
    endDate: new Date("1998-06-06"),
    title: "Title Of First Item",
    children: (
      <>
        <p>foo foo fo</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2004-06-06"),
    endDate: new Date("2008-06-06"),
    title: "Lqst Job",
    children: (
      <>
        <p>second item</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2004-06-06"),
    endDate: new Date("2008-06-06"),
    title: "Lqst Job",
    children: (
      <>
        <p>second item</p>
        <p>second line</p>
      </>
    )
  }
];

const education = [
  {
    startDate: new Date("1998-06-06"),
    endDate: new Date("1998-06-06"),
    title: "Edu1",
    children: (
      <>
        <p>foo foo fo</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2004-06-06"),
    endDate: new Date("2008-06-06"),
    title: "Edu2",
    children: (
      <>
        <p>second item</p>
        <p>second line</p>
      </>
    )
  }
];

const skills = [
  { name: "html", level: 3 },
  { name: "css", level: 3 },
  { name: "js", level: 2 },
  { name: "english", level: 5 },
  { name: "italian", level: 0 }
];
export default function App() {
  return (
    <div className="container">
      <header className="header" />

      <ProfileImg />
      <MyInfo />

      <main>
        <ResumeItem title="About Me">
          <p>
            An accomplished individual with a background in JavaScript, React,
            React-Native, Dart, Kotlin, Swift, C++, NodeJS, Java, HTML and CSS.
            Anees strongly believes in the power of the Internet and has an
            intense desire to learn how to improve the webs core functionality,
            and to also be involved in its future development.
          </p>
          <p>
            He has a good understand of programming, can come up with plenty of
            innovative ideas and possesses superb communication skills. Right
            now he is looking for a suitable position with a company that offers
            a unique work environment within which its staff can thrive and
            grow.
          </p>
          <p>
            Anees is also register in Arbetsförmedlingen and they will pay most
            part or his salary as a new start job.
          </p>
        </ResumeItem>

        <ResumeItem title="Experience">
          {experience.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Education">
          {education.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>

        <ResumeItem title="skills">
          {skills.map(item => (
            <SkillBars {...item} />
          ))}
        </ResumeItem>

        <ResumeItem title="Achievements">
          <ul className="ach-list">
            <li>
              <h4>graphic design award 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <h4>graphic design award</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </ResumeItem>
      </main>
      <footer />
    </div>
  );
}
