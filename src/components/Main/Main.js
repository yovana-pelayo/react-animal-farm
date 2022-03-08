import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data';

export default function Main() {
  return (
    <main>
      {animals.map((item) => (
        <Animal
          key={item.name}
          type={item.type}
          says={item.says}
          name={item.name}
          top={item.top}
          left={item.left}
        />
      ))}
    </main>
  );
}
