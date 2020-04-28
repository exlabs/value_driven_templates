import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SpecialLink } from '../../../ui/special-link/special-link.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { Header } from '../../../ui/header/header.component';
import {
  HeaderImage,
  HeaderTitle,
  HeaderSubtitle,
} from '../../../ui/header/header.styles';

export const AboutHeader = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Header imageUrl={`${process.env.ASSET_PREFIX}/about/header.svg`}>
      <HeaderTitle>Hello, We are Exlabs.</HeaderTitle>
      {isMobile && (
        <HeaderImage
          alt="Header"
          src={`${process.env.ASSET_PREFIX}/about/header.svg`}
        />
      )}
      <HeaderSubtitle>
        We deliver high-level consultancy & flexible, complex data-driven
        software solutions for the companies of the future.
      </HeaderSubtitle>
      <AnchorLink
        offset="100"
        href="#about-content"
        style={{ textDecoration: 'none' }}
      >
        <SpecialLink
          href="#about-content"
          label="Read about Value Driven Engineering"
        />
      </AnchorLink>
    </Header>
  );
};
