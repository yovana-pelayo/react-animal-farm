import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal';
import { animals } from '../../data';

export default function Main() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
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
    </div>
  );
}
