import React from 'react';

const Service = (props) => {
  const { title, image, description } = props;
  return (
    <div className="team-player">
      <img alt="..." className="rounded-circle img-fluid img-raised" src={image} width={220}></img>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default Service;
