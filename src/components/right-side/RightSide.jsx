import './RightSide.css';
import AboutMeSection from '../right-side/RightComponents/AboutMe/AboutMe.jsx';
import { experienceData } from './RightComponents/ExperienceItem/Experience.jsx'; 
import { projectData } from './RightComponents/ProjectItem/ProjectData.jsx'; 
import ExperienceItem from '../right-side/RightComponents/ExperienceItem/ExperienceItem.jsx';
import ProjectItem from './RightComponents/ProjectItem/ProjectItem.jsx';
import Additional from './RightComponents/Additional/Additional.jsx';
import EndText from './RightComponents/EndText/EndText.jsx';
import { AdditionalContent } from './RightComponents/Additional/AdditionalContent.jsx'
import { Element } from 'react-scroll';

const RightSide = () => {
  return (
    <div className="right">
      <Element name="section1">
      <p className="mobile-title">ABOUT</p>
        <AboutMeSection />
      </Element>

      <Element name="section2">
      
        <div className="experience-section">
        <p className="mobile-title">EXPERIENCE</p>
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              date={item.date}
              role={item.role}
              positions={item.positions}
              description={item.description}
              skills={item.skills}
            />
          ))}
          <p className="View-Full-Resume">View Full Resume</p>
        </div>
      </Element>

      <Element name="section3">
        <div className="projects">
        <p className="mobile-title">PROJECTS</p>
          {projectData.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              skills={item.skills}
            />
          ))}
          <p className="View-Full-Resume">View Full Project Archive</p>
        </div>

        <div className="additional">
        <p className="mobile-title">WRITING</p>
          {AdditionalContent.map((item, index) => (
            <Additional
              key={index}
              image={item.image}
              year={item.year}
              description={item.description}
            />
          ))}
        </div>
      </Element>

      <EndText />
    </div>
  );
};

export default RightSide;
