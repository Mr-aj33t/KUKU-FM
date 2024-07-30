import React from 'react';

const ProjectItem = ({ onClick }) => {
  return (
    <div onClick={onClick} className="project-item">
      Clickable Project Item
    </div>
  );
};

const App = () => {
  const handleProjectClick = () => {
    alert('Project clicked!');
  };

  return (
    <div>
      <h1>My Projects</h1>
      <ProjectItem onClick={handleProjectClick} />
    </div>
  );
};

export default App;
