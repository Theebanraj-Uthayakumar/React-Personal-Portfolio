import React from "react";

function About() {
  return (
    <div className="bNXWUU">
      <h1 className="numbered-heading">About Me</h1>
      <div className="inner">
        <div className="about__StyledText-sc-1ownso9-1 kNIdQM">
          <div>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React. Here are a few technologies I’ve
              been working with recently:
            </p>
          </div>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>MySQL</li>
            <li>React Native</li>
            <li>WordPress</li>
            <li>Node.js</li>
            <li>Azure DevOps</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="about__StyledPic-sc-1ownso9-2 iTdkQf">
          <div className="wrapper">
            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
              <div style={{ maxWidth: "500px", display: "block" }}>
                <img
                  alt="image"
                  role="presentation"
                  aria-hidden="true"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                style={{
                  opacity: "0",
                  transition: "opacity 500ms linear 0s",
                  backgroundColor: "#64ffda",
                  position: "absolute",
                  inset: "0px",
                  objectFit: "cover",
                }}
              ></div>
              <picture>
                <source
                  type="image/avif"
                  srcSet="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{ minWidth: "500px 500px 100vw" }}
                ></source>
                <source
                  type="image/avif"
                  srcSet="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{ minWidth: "500px 500px 100vw" }}
                ></source>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
