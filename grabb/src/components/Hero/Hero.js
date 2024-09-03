import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #d92e4d 0%, #e91e63 100%);
  color: white;
  height: 600px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
  padding-right: 30px;
  color: white;

  @media (max-width: 768px) {
    font-size: 40px;
    padding-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
  line-height: 1.4;
  color: black;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const OrderButton = styled.button`
  background-color: white;
  color: #d92e4d;
  border: none;
  padding: 15px 28px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CircleDecoration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid white;
  background-color: transparent;
  transform: translate(20%, -20%);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-width: 6px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    border-width: 4px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>The Fastest Grocery Delivery</Title>
        <Description>
          From local favorites to exotic delights, discover a world of flavors delivered right to your door. Satisfaction guaranteed, one bite at a time!
        </Description>
        <OrderButton>ORDER NOW</OrderButton>
      </Content>
      <ImageContainer>
        <HeroImage src="https://www.pngitem.com/pimgs/m/241-2413626_grocery-transparent-images-png-grocery-png-png-download.png" alt="Grocery Delivery" />
        <CircleDecoration />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
