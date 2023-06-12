import React, { useRef } from 'react';

import './style.scss';

export default function App() {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    const startPosition = e.clientX;
    const scrollPosition = container.scrollLeft;

    const handleMouseMove = (e) => {
      const delta = e.clientX - startPosition;
      container.scrollLeft = scrollPosition - delta;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleLeftButtonClick = () => {
    const container = containerRef.current;
    container.scrollLeft -= 100;
  };

  const handleRightButtonClick = () => {
    const container = containerRef.current;
    container.scrollLeft += 100;
  };

  return (
    <div className="pregnancy-ruler-container">
      <div className="pregnancy-ruler-container__title">
        Gravidez semana a semana:
      </div>
      <div className="pregnancy-ruler-scroll-container">
        <div
          className="arrows-navigation"
          onClick={handleLeftButtonClick}
          onMouseDown={handleMouseDown}
          id="leftButton"
        >
          <div className="arrows-navigation__left"></div>
        </div>

        <div
          className="pregnancy-ruler-scroll-container__ref"
          ref={containerRef}
        >
          <div className="pregnancy-ruler-scroll-container__scrollable">
            {Array.from({ length: 41 }).map((_, index) => (
              <>
                <a className="pregnancy-week-card" href="http://www.google.com">
                  <div className="pregnancy-week-card__text">
                    <div className="pregnancy-week-card__text__number">
                      {index + 2}
                    </div>
                    <p className="pregnancy-week-card__text__weeks">Semanas</p>
                    <p className="pregnancy-week-card__text__pregnancy">
                      de gravidez
                    </p>
                  </div>
                  <div className="right">
                    <img
                      alt="ilustração do espermatozóides em torno do óvulo"
                      data-src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                      class="lazy mui-style-hmtg8 es0q0or0 entered loaded"
                      data-ll-status="loaded"
                      src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                    />
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
        <div
          className="arrows-navigation"
          onClick={handleRightButtonClick}
          onMouseDown={handleMouseDown}
          id="rightButton"
        >
          <div className="arrows-navigation__right"></div>
        </div>
      </div>
      <div className="pregnancy-ruler-container__footer"></div>
    </div>
  );
}
