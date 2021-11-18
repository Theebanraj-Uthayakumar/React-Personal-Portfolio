import React from "react";
import Container from "@mui/material/Container";
import About from "./About";
// import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Home() {
  return (
    <div>
      <Container>
        <div className="cZslOS">
          <main className="pages__StyledMainContainer-sc-1tzx2o8-0 ePyBYl fillHeight">
            <div className="eEjAsd">
              {" "}
              <div
                className="fadeup-enter-done"
                style={{
                  fontSize: "16px",
                  fontFamily: " Roboto Mono, monospace",
                  transitionDelay: "100ms",
                  color: "#64ffda",
                }}
              >
                Hi, my name is
              </div>
              <br />
              <span
                className="home-username"
                style={{ transitionDelay: "200ms" }}
              >
                Theebanraj U.
              </span>
              <span style={{ transitionDelay: "300ms" }}>
                I build things for the web & Mobile.
              </span>
              <p>
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at Upstatement.
              </p>
            </div>
            <About />
            {/* <Experience /> */}
            <Work />
            <Contact />
            {/* <Footer /> */}
          </main>
        </div>
      </Container>
      <div className="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
        <ul className="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
          <li>
            <a href="https://github.com/Theebanraj-Uthayakumar">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theebanraj-uthayakumar-5429b3197/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/theebanraj_uthayakumar/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thee.theeban.3/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Theebanraj10">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__StyledSideElement-sc-1duznzb-0 iKeBGp">
        <ul>
          <li>
            <a href="https://github.com/Theebanraj-Uthayakumar">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theebanraj-uthayakumar-5429b3197/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/theebanraj_uthayakumar/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thee.theeban.3/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Theebanraj10">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__StyledSideElement-sc-1duznzb-0 jSIwrL">
        <div className="email__StyledLinkWrapper-sc-2epoq-0 jJFfEJ fade-enter-done">
          <a href="mailto:theebanrajuthaykumar10@gmail.com">
            theebanrajuthaykumar10@gmail.com
          </a>
        </div>
      </div>
      <footer className="footer__StyledFooter-sc-4jwnt4-0 earxGk">
        {/* <h4>Designed & Build By Theebanraj Uthayakumar</h4> */}
        <div className="footer__StyledCredit-sc-4jwnt4-2 fLSMpu">
          <div>Designed & Built by Theebanraj Uthayakumar</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
