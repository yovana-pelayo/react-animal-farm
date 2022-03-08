import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data';

export default function Main() {
  return (
    <main>
      <div>
        <Animal type={'cow'}></Animal>
      </div>
    </main>
  );
}
