import React from 'react';

const GitHub = () => {
  const avatarStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '48px',
  };
  return (
    <div>
      <a href="https://github.com/vikbert/react-MIT-todo" target="_blank" rel="noopener noreferrer" style={avatarStyle}>
        <img className="avatar"
             src="https://github.githubassets.com/images/modules/site/logos/desktop-logo.png"
             alt="avatar"/>
      </a>
    </div>
  );
};

export default GitHub;
