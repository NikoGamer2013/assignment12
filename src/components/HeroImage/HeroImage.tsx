import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${props => props.height || '400px'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || '#f0f0f0'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.overlayColor || 'rgba(0, 0, 0, 0.4)'};
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, subtitle, overlay = true, ...props }) => {
  return (
    <HeroContainer {...props}>
      <HeroImg src={src} alt={alt} />
      {overlay && <HeroOverlay overlayColor={props.overlayColor} />}
      {(title || subtitle) && (
        <HeroContent>
          {title && <HeroTitle>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        </HeroContent>
      )}
    </HeroContainer>
  );
};

export default HeroImage;