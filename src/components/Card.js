import React from 'react';

export const Card = props => {
  return (
    <div>
      <img alt="avatar" src={props.avatar_url} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        <p>{props.blog}</p>
      </div>
    </div>
  );
};

export default Card;