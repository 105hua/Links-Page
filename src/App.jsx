import "./App.css";
import ProfilePicture from "./assets/pfp.webp";
import QuestionMarkIcon from "./assets/fa-icons/questionmark.svg";
import GitHubIcon from "./assets/fa-icons/github.svg";
import DiscordIcon from "./assets/fa-icons/discord.svg";
import { useState } from "react";

function App() {
  const [discordNotice, setDiscordNotice] = useState(false);
  const [aboutMeCard, setAboutMeCard] = useState(false);
  const [showNormalCard, setShowNormalCard] = useState(true);
  const onAboutMeLinkClicked = () => {
    setShowNormalCard(false);
    setAboutMeCard(true);
  }
  const NormalCard = () => {
    return(
      <div>
        <a className="link-base" href="#" onClick={onAboutMeLinkClicked}>
          <img className="aboutme-icon" src={QuestionMarkIcon} />
          <p className="link-text">About Me</p>
        </a>
        <a className="link-base" href="https://github.com/105hua">
          <img className="misc-icon" src={GitHubIcon} />
          <p className="link-text">GitHub</p>
        </a>
        <a className="link-base" href="#">
          <img className="misc-icon" src={DiscordIcon} />
          <p className="link-text">Discord</p>
        </a>
      </div>
    );
  };

  const AboutMeCard = () => {
    const onBackButtonPressed = () => {
      setAboutMeCard(false);
      setShowNormalCard(true);
    }
    return(
      <div>
        <h2 className="aboutme-base-text">About Me</h2>
        <p className="aboutme-base-text aboutme-paragraph">
          Hello, I'm Josh, also known as Supra, a Software Developer based in
          the UK. I specialize in Desktop and Backend Web Development and I'm
          always looking to improve my knowledge and keep tabs on developments
          within my field, especially when it comes to the ever-changing face
          of Artificial Intelligence, as it has always fascinated me and I cannot
          wait to see how it changes our world.
        </p>
        <p className="aboutme-base-text aboutme-paragraph aboutme-thankyou">
          Thank you for visiting my landing page!
        </p>
        <button className="aboutme-backbutton" onClick={onBackButtonPressed}>Back</button>
      </div>
    );
  };

  return (
    <main>
      <div className="links-container">
        {/* Information */}
        <h1 className="name-header">Joshua T. (Supra)</h1>
        <img className="profile-picture" src={ProfilePicture} alt="My Profile Picture" />
        {showNormalCard && <NormalCard />}
        {aboutMeCard && <AboutMeCard />}
      </div>
      <h6 className="bottom-text">I made this myself! <a className="click-here-link" href="https://github.com/105hua/Links-Page">Click Here</a> to check out the repository!</h6>
    </main>
  )
}

export default App
