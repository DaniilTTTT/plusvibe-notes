import React from 'react';
import './Fireflies.css'; // Стили вынесем в отдельный файл

const Fireflies = () => {
  return (
    <div className="fireflies-container">
      {/* Генерируем массив из 50 элементов и маппим их в div'} */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="firefly"
          style={{
            '--left': `${Math.random() * 100}%`,
            '--top': `${Math.random() * 100}%`,
            '--size': `${Math.random() * 0.5 + 0.25}rem`,
            '--delay': `${Math.random() * 15}s`, // Случайная задержка до 15 секунд
            '--duration': `${Math.random() * 10 + 10}s`, // Случайная длительность анимации
          }}
        ></div>
      ))}
    </div>
  );
};

export default Fireflies;