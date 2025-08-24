import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 220px;
  border: 2px solid black;
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledAuthorImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const StyledStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDescription = styled.p`
  font-size: 0.875rem;
  color: gray;
  margin: 0.25rem 0;
`;

const StyledPrice = styled.span`
  color: red;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Card = ({ img, imgAuthor, title, number, shape, desc, price }) => {
  return (
    <StyledCard>
      <StyledImage src={img} alt={title} />

      <StyledAuthor>
        <StyledAuthorImg src={imgAuthor} alt={title} />
        <StyledTitle>{title}</StyledTitle>
      </StyledAuthor>

      <StyledDescription>{desc}</StyledDescription>

      <StyledStats>
        <span>
          {shape} {number}
        </span>
        <StyledPrice>{price}</StyledPrice>
      </StyledStats>
    </StyledCard>
  );
};

export default Card;
