import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  background-color: #d92e4d;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImageContainer = styled.div`
  padding: 10px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

const CardContent = styled.div`
  padding: 10px;

  @media (max-width: 480px) {
    padding: 8px 5px;
  }
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartIcon = styled(Heart)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  stroke: ${props => props.isLiked ? '#ff5e7d' : 'white'};
  fill: ${props => props.isLiked ? '#ff5e7d' : 'none'};
  stroke-width: 2;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.1);
  }

  &.liked {
    animation: ${pulse} 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    top: 12px;
    right: 12px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    top: 10px;
    right: 10px;
  }
`;

const PopularItems = () => {
  const [likedItems, setLikedItems] = useState([]);

  const items = [
    { id: 1, name: "Orange", imgSrc: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg" },
    { id: 2, name: "Papaya", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51CIcipnubEsdQn7q7TNF8X8OL89a9kkxVQ&s" },
    { id: 3, name: "Apple", imgSrc: "https://www.yates.com.au/media/plants/fruit-and-citrus/pr-tn-fruit-apple.jpg" },
    { id: 4, name: "Banana", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigSi_EWbA2-Xw-KQBHrhrHs7H0_MDYAPkHw&s" },
  ];

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id)
        ? prevLikedItems.filter((item) => item !== id)
        : [...prevLikedItems, id]
    );
  };

  return (
    <Container>
      <Header>
        <Title>Popular Items</Title>
        <ViewAll href="#">View All</ViewAll>
      </Header>
      <CardsContainer>
        {items.map((item) => (
          <Card key={item.id}>
            <HeartIcon
              isLiked={likedItems.includes(item.id)}
              onClick={() => toggleLike(item.id)}
              aria-label={likedItems.includes(item.id) ? "Unlike" : "Like"}
              className={likedItems.includes(item.id) ? 'liked' : ''}
            />
            <CardImageContainer>
              <CardImage src={item.imgSrc} alt={item.name} loading="lazy" />
            </CardImageContainer>
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default PopularItems;