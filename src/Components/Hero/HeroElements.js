import styled from 'styled-components';
import { Flex, ButtonStyle} from '../GlobalStyle';
export const HeroSection = styled.section`
  width: 100%;
  height: 555px;
  margin: 25px 0 150px 0;
`
export const HeroContent = styled.div`
  align-items: flex-start;
  flex: 1;
`
export const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 18px;
`
export const HeroDescription = styled.p`
  margin-bottom: 45px;
`
export const HeroBtns = styled(Flex)`
  height: 53px;
`
export const StartBtn = styled(ButtonStyle)`
  margin-right: 18px;
  background: #02897A;
`
export const WatchBtn = styled.div`
  color: #02897A;
`
export const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`

