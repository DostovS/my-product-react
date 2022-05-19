import React from 'react';
import {Container, Row} from '../GlobalStyle';
import HeroImg from '../images/Hero.svg';

import { HeroSection,HeroContent,HeroTitle,HeroDescription,HeroBtns,StartBtn,WatchBtn, HeroImage } from './HeroElements';

export default function Hero() {
  return (
    <>
      <HeroSection>
        <Container>
          <Row>
            <HeroContent>
              <HeroTitle>
                Work at the speed of thought
              </HeroTitle>
              <HeroDescription>
                Tools, tutorials, design and innovation experts, all 
                in one place! The most intuitive way to imagine 
                your next user experience.
              </HeroDescription>
              <HeroBtns>
                <StartBtn>
                  Get started
                </StartBtn>
                <WatchBtn>
                  Watch the video
                </WatchBtn>
              </HeroBtns>
            </HeroContent>
            <HeroImage>
              <img src={HeroImg} alt="" />
            </HeroImage>
          </Row>
        </Container>
      </HeroSection>
    </>
  )
}