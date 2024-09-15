import React from 'react';
import project1 from './project fb.png';
import project2 from './project gpt.webp';
import project3 from './project twitch.webp';

function Projects() {
  const projectData = [
    {
      title: "FACEBOOK",
      image: project1,
      description: "Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like."
    },
    {
      title: "CHATGPT",
      image: project2,
      description: "ChatGPT is similar to the automated chat services found on customer service websites, as people can ask it questions or request clarification to ChatGPT's replies. The GPT stands for Generative Pre-trained Transformer which refers to how ChatGPT processes requests and formulates responses."
    },
    {
      title: "TWITCH",
      image: project3,
      description: "Twitch, American online live streaming platform where users can watch video game footage. Founded in 2011, Twitch has become the largest video game streaming platform in the world, having an average of 31 million visitors daily."
    }
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
