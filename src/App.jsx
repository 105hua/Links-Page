import "./App.css";
import ProfilePicture from "./assets/pfp.webp";
import QuestionMarkIcon from "./assets/fa-icons/questionmark.svg";
import GitHubIcon from "./assets/fa-icons/github.svg";
import DiscordIcon from "./assets/fa-icons/discord.svg";
import { useState } from "react";

function App() {
  const [discordNotice, setDiscordNotice] = useState(false);
  const [aboutMeCard, setAboutMeCard] = useState(false);
  const placeholderClickEvent = () => {
    alert("TODO");
  };
  return (
    <main>
      <div className="links-container">
        {/* Information */}
        <h1 className="name-header">Joshua T (Supra)</h1>
        <img className="profile-picture" src={ProfilePicture} alt="My Profile Picture" />
        {/* Links */}
        <a className="link-base" href="#" onClick={placeholderClickEvent}>
          <img className="aboutme-icon" src={QuestionMarkIcon} />
          <p className="link-text">About Me</p>
        </a>
        <a className="link-base" href="https://github.com/105hua">
          <img className="misc-icon" src={GitHubIcon} />
          <p className="link-text">GitHub</p>
        </a>
        <a className="link-base" href="#" onClick={placeholderClickEvent}>
          <img className="misc-icon" src={DiscordIcon} />
          <p className="link-text">Discord</p>
        </a>
      </div>
      <h6 className="bottom-text">I made this myself! <a className="click-here-link" href="https://github.com/105hua/Links-Page">Click Here</a> to check out the repository!</h6>
    </main>
  )
}

export default App
