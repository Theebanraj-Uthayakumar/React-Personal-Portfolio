import React from "react";
import Container from "@mui/material/Container";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

function Archive() {
  return (
    <div>
      <Container>
        <header className="archive_header">
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>
        <div className="archive__StyledTableContainer-sc-2cxdc9-0 kgfDTC table-style">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Build with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">Personal Website V2</td>
                <td className="company hide-on-mobile">
                  <span>---</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    React(.js), MUI<span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    <a
                      href="https://theebanraj-uthayakumar.github.io/Theebanraj/"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a>
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Theebanraj"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">EASY4AD Web</td>
                <td className="company hide-on-mobile">
                  <span>Aarthy HQC</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    React(.js), React Bootstrap, MUI, Redux
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td>
                  <div>
                    <a
                      href="http://easy4ad.com/"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a>
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                    >
                      <GitHubIcon />
                    </a> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">EASY4AD Mobile App</td>
                <td className="company hide-on-mobile">
                  <span>Aarthy HQC</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    React Native
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    <HourglassEmptyIcon />
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a>
                    <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                    >
                      <GitHubIcon />
                    </a> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">Healistry</td>
                <td className="company hide-on-mobile">
                  <span>SLIIT</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    MongoDB, Express(.js), React(.js), Node(.js)
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a> */}
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Healistry_ITP-project"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">Royal Kitchen Mobile App</td>
                <td className="company hide-on-mobile">
                  <span>SLIIT</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    Java, Android Studio
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a> */}
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Royal_Kitchen"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2021</td>
                <td className="title">Personal Website V1</td>
                <td className="company hide-on-mobile">
                  <span>---</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    HTML, CSS, Bootstrap 4<span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    <a
                      href="https://theebanraj-uthayakumar.github.io/Theebanraj/"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a>
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Theebanraj"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2020</td>
                <td className="title">Online Help Desk</td>
                <td className="company hide-on-mobile">
                  <span>SLIIT</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    HTML, CSS, PHP, JavaScript, MySQL
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a> */}
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Online_Help_Desk"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="overline year">2020</td>
                <td className="title">Cosmedico_web</td>
                <td className="company hide-on-mobile">
                  <span>---</span>
                </td>
                <td className="tech hide-on-mobile">
                  <span>
                    HTML, CSS
                    <span className="seprator">.</span>
                  </span>
                </td>
                <td className="links">
                  <div>
                    {/* <a
                      href="/#"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <OpenInNewIcon />
                    </a> */}
                    <a
                      href="https://github.com/Theebanraj-Uthayakumar/Cosmedico_web"
                      target="_blank"
                      className="feather feather-external-link"
                      style={{ paddingRight: "5px" }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <div className="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
        <ul className="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
          <li>
            <a href="/#">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__StyledSideElement-sc-1duznzb-0 iKeBGp">
        <ul>
          <li>
            <a href="/#">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="/#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="/#">
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

export default Archive;
