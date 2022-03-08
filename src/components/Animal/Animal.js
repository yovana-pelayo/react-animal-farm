import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal">
      {props.type} {props.name} {props.says}
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span className="name">{props.name}</span>
    </div>
  );
}
