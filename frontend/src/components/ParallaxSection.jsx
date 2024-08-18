import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = ({ image, children }) => {
  return (
    <Parallax bgImage={image} strength={300}>
      <div style={{ height: '500px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.5)',
          padding: '50px',
          textAlign: 'center',
        }}>
          {children}
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
