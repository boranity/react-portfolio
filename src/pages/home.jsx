import "../App.css";
import Pfp from "../assets/pfp.jpg";
import { Icon } from "@iconify/react";
import Navbars from "../Components/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbars />

      <div className="box">
        <h1>Boranity</h1>
        <h2>I'm Web Developer & Linux Sysadmin</h2>
        <p>🇹🇷 based in the Türkiye</p>
        <p>💻 Web Developer, Linux Sysadmin at Ramondia.net</p>
        <p>📧 boranity0@tutanota.com</p>
        <img src={Pfp} alt="pfp" className="pfp" />

        <a href="https://github.com/boranity" target="_blank">
          <Icon icon="simple-icons:github" className="custom-icon" />
        </a>

        <a href="https://matrix.to/#/@boran:ramondia.net" target="_blank">
          <Icon icon="simple-icons:matrix" className="custom-icon" />
        </a>

        <a href="https://t.me/boranity" target="_blank">
          <Icon icon="simple-icons:telegram" className="custom-icon" />
        </a>
      </div>

    </>
  );
}

export default Home;
