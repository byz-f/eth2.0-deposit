import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import EthDiamondPlain from '../../static/eth-diamond-plain.svg';
import EthRound from '../../static/eth-round-landing.svg';
import { Text } from '../../components/Text';
import { Heading } from '../../components/Heading';

const Container = styled.div`
  background: ${p => p.theme.white};
`;
const SubContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: ${p => p.theme.screenSizes.largest};
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;
  @media only screen and (max-width: ${p => p.theme.screenSizes.largest}) {
    padding: 0 60px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    display: none;
  }
`;

// adds an opaque eth logo behind the text on small screen sizes
const ContentContainer = styled.div`
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    :before {
      content: ' ';
      display: block;
      position: absolute;
      right: 60px;
      top: 35px;
      width: 250px;
      height: 400px;
      z-index: 1;
      opacity: 0.15;
      background-image: url(${EthDiamondPlain});
      background-repeat: no-repeat;
      background-position: 50% 0;
      -ms-background-size: cover;
      -o-background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
`;
export const Introduction = (): JSX.Element => {
  return (
    <Container>
      <SubContainer className="py100 flex">
        <ImgContainer>
          <img src={EthRound} alt="" />
        </ImgContainer>
        <ContentContainer>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Heading level={2} size="medium" color="blueDark" margin="none">
              Introduction to the Sign-Up Process
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <Text className="mt25">
              ETH2 is the next generation of Ethereum. It’s a multi-year plan to
              improve the scalability, security and programmability of Ethereum,
              without compromising on decentralization.
            </Text>
            <Text className="mt25">
              In contrast to the Ethereum chain, as it currently stands, ETH2
              uses proof-of-stake (PoS) to secure its network. And while
              Ethereum as you know and love it will continue to exist as its own
              independent proof-of-work chain for a little while to come, the
              transition towards PoS starts now.
            </Text>
            <Text className="mt25">
              In order to make this transition possible, ETH2 requires active
              participants – known as validators. Validators are responsible for
              securing the network and receive continuous payouts for actions
              that help the network reach consensus.
            </Text>
            <Text className="mt25">
              This launchpad takes you through the process of becoming a 
              validator.
            </Text>
          </ScrollAnimation>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};
