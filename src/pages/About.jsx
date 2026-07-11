import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import TeamSection from "../components/about/TeamSection";
import CompanyValues from "../components/about/CompanyValues";
import CallToAction from "../components/about/CallToAction";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <AboutHero /><br/>
      <OurStory /><br/>
      <MissionVision /><br/>
      <TeamSection /><br/>
      <CompanyValues /><br/>
      <CallToAction /><br/>
    </div>
  );
};

export default About;