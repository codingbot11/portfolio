import React from "react";
import "./About.css";
import hand from "../assets/Rectangle.webp";
import yellowLeft from "../assets/Vector 4.svg";
import yellowRight from "../assets/Vector 3.svg";
import greyLeft from "../assets/Vector 1.svg";
import greyRight from "../assets/Vector 5.svg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>
          <span className="first-letter">T</span>his is it.{" "}
          <span className="wink">; &#41;</span>
        </h2>
        <hr className="divider" />

        <p>
          Anish K. Sinha is an Indian{" "}
          <strong>UI/UX Designer & Front End Developer</strong> with a passion
          for designing beautiful and functional user experiences. Typically,
          he's Driven & permanently Curious. He's obsessed with designing things
          and even more obsessed with designing cool & clean stuff for the web
          and mobile. He has been in the business of creating since he hung his
          first painting on the wall when he was 11.
        </p>

        <p>
          He holds a <strong>bachelor degree in Computer Applications</strong>.
          During his graduation, he has been actively involved in the web design
          community for the last 3 years. He has designed websites for small
          businesses, events, nonprofits and more. Currently he's based in{" "}
          <strong>Bihar, India</strong>. Where he's working as an independent
          creative.
        </p>

        <p>
          His interests, however, extend beyond the web and he loves helping
          people with branding and print design. He even loves designing{" "}
          <strong>3D floor plan</strong>.
        </p>

        <p>
          When he's not designing, he's probably hanging out with his
          girlfriend, watching series, sketching or messing around on something
          inspired by YouTube tutorials.
        </p>
      </div>

      <img src={hand} alt="hand emoji" className="emoji-hand" />
      <img src={yellowLeft} alt="yellow blob" className="yellow-shape left" />
      <img src={yellowRight} alt="yellow blob" className="yellow-shape right" />
      <img src={greyLeft} alt="grey blob left" className="grey-shape left" />

      <img
        src={greyRight}
        alt="grey blob bottom"
        className="grey-shape bottom-right"
      />
      <hr className="divider-bottom" />
    </section>
  );
}
