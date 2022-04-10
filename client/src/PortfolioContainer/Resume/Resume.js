import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import index from "react-typical";

export default function Resume(props){
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
        
          //here we have
          const programmingSkillsDetails = [
            { skill: "JavaScript", ratingPercentage: 50 },
            { skill: "React JS", ratingPercentage: 50 },
            { skill: "React Native", ratingPercentage: 30 },
            { skill: "Express JS", ratingPercentage: 30 },
            { skill: "Node JS", ratingPercentage: 30 },
            { skill: "HTML", ratingPercentage: 80 },
            { skill: "PHP", ratingPercentage: 50 },
            { skill: "CSS", ratingPercentage: 80 },
          ];
        
          const projectsDetails = [
            {
              title: "Personal Portfolio Website",
              duration: { fromDate: "2021", toDate: "2022" },
              description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
              subHeading: "Technologies Used: React JS, Bootsrap",
            },
            {
              title: "Ecommerce Website ",
              duration: { fromDate: "2020", toDate: "2021" },
              description:
                "Online ecommerce website for showcasing and selling products onlne with payment system integration",
              subHeading:
                "Technologies Used: HTML, CSS, PHP, Bootstrap.",
            },
          ];
        
          const resumeDetails = [
            <div className="resume-screen-container" key="education">
              <ResumeHeading
                heading={"Bataan Heroes College"}
                subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
                fromDate={"2018"}
                toDate={"2022"}
              />
        
              <ResumeHeading
                heading={"Bagac National HighSchool"}
                subHeading={"HighSchool"}
                fromDate={"2011"}
                toDate={"2015"}
              />
              <ResumeHeading
                heading={"Parang Elementary School "}
                subHeading={"Elementary"}
                fromDate={"2006"}
                toDate={"2011"}
              />
            </div>,
        
            /* WORK EXPERIENCE */
            <div className="resume-screen-container" key="work-experience">
              <div className="experience-container">
                <ResumeHeading
                  heading={"Freelance"}
                  subHeading={"JAVA DEVELOPER"}
                  fromDate={"2021"}
                  toDate={"2022"}
                />
                <div className="experience-description">
                  <span className="resume-description-text">
                    Work as a JAVA programmer
                  </span>
                </div>
              </div>
            </div>,
        
            /* PROGRAMMING SKILLS */
            <div
              className="resume-screen-container programming-skills-container"
              key="programming-skills"
            >
              {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                  <div className="heading-bullet"></div>
                  <span>{skill.skill}</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: skill.ratingPercentage + "%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>,
        
            /* PROJECTS */
            <div className="resume-screen-container" key="projects">
              {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                  key={index}
                  heading={projectsDetails.title}
                  subHeading={projectsDetails.subHeading}
                  description={projectsDetails.description}
                  fromDate={projectsDetails.duration.fromDate}
                  toDate={projectsDetails.duration.toDate}
                />
              ))}
            </div>,
        
            /* Interests */
            <div className="resume-screen-container" key="interests">
              <ResumeHeading
                heading="Teaching"
                description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
              />
              <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
              />
              <ResumeHeading
                heading="Competitive Gaming"
                description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
              />
            </div>,
          ];
        
          const handleCarousal = (index) => {
            let offsetHeight = 360;
        
            let newCarousalOffset = {
              style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
            };
        
            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
          };
          const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
              <div
                onClick={() => handleCarousal(index)}
                className={
                  index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
              >
                <img
                  className="bullet-logo"
                  src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                 
                />
                <span className="bullet-label">{bullet.label}</span>
              </div>
            ));
          };
          const getResumeScreens = () => {
            return (
              <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
              >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
              </div>
            );
          };
    return(
      <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
