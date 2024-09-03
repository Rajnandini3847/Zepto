import React, { useState } from 'react';
import styled from 'styled-components';
import { Heart } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

const ViewAll = styled.a`
  color: #ff5e7d;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #d92e4d;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #f2f2f2;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const HeartIcon = styled(Heart)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  stroke: ${props => props.isLiked ? '#ff5e7d' : 'white'};
  fill: ${props => props.isLiked ? '#ff5e7d' : 'none'};
  stroke-width: 2;
  width: 30px;
  height: 30px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.1);
  }
`;

const ServiceCards = () => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const cards = [
    {
      id: 1,
      title: "Vegetables",
      image: "https://www.vikhrolicucina.com/uploads/stories/1638446932_healthyvegetableswoodentable.jpg"
    },
    {
      id: 2,
      title: "Fruits",
      image: "https://www.fruitsmith.com/pub/media/mageplaza/blog/post/s/e/seedless_fruits.jpg"
    },
    {
      id: 3,
      title: "Milk & Eggs",
      image: "https://whisk.com/wp-content/uploads/2023/02/shutterstock_1679020255.jpg"
    }
  ];

  return (
    <Container>
      <Header>
        <Title>What's on your Mind?</Title>
        <ViewAll href="#">View All</ViewAll>
      </Header>
      <CardsContainer>
        {cards.map(card => (
          <Card key={card.id}>
            <CardImage src={card.image} alt={card.title} />
            <HeartIcon 
              onClick={() => toggleLike(card.id)}
              isLiked={likedItems.includes(card.id)}
            />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default ServiceCards;