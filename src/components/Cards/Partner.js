import React from 'react';

const Partner = (props) => {
  const { image, marginTop } = props;
  return (
    <div className="team-player">
      <img
        alt="..."
        className=" img-fluid"
        src={image}
        height={220}
        width="auto"
        style={{ marginTop: marginTop ? marginTop : 0 }}></img>
    </div>
  );
};

export default Partner;
