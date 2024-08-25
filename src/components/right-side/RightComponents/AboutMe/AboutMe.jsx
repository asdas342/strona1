import aboutMe from './AboutMeContent.jsx';
import './AboutMe.css';

const AboutMeSection = () => {
  return (
    <div className="text-about-me">
      {aboutMe.map((text, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
    </div>
  );
};

export default AboutMeSection;
