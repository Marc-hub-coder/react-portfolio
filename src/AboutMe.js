import React from 'react';
import PicMe from "./2x2.jpg";

function AboutMe() {
  return (
    <div className="about-section">
        <h2>About Me</h2>
        <img src={PicMe} alt="react logo" />
      <p>Hello I'm Marc Eiron Hernandez, 3rd year college student currently studying computer science at De La Salle Lipa. Since technology is more of a trend today, I like to explore it so that I can keep up with the change. My passion on this field started when I was grade 11, It was pandemic when I got attached to my computer. As time passed by I learned more about the technology and how it is evolving. </p>
    </div>
  );
}

export default AboutMe;
