import AboutBitBlogs from "./components/sections/AboutBitBlogs";
import JoinUs from "./components/sections/JoinUs";
import OurMission from "./components/sections/OurMission";
import OurStory from "./components/sections/OurStory";
import WeOffer from "./components/sections/WeOffer";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <AboutBitBlogs />
      <OurMission />
      <WeOffer />
      <OurStory />
      <JoinUs />
    </div>
  );
};

export default About;
