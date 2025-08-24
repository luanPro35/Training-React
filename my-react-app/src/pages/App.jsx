import Card from "../components/Card";
import { CardProducts } from "../data/CardList";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledAppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  justify-items: center;
`;

import { theme } from "../styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        {CardProducts.map((product) => (
          <Card
            key={product.id}
            img={product.image}
            imgAuthor={product.imageAuthor}
            title={product.nameAuthor}
            number={product.number}
            shape={product.shape}
            desc={product.content}
            price={product.price}
          />
        ))}
      </StyledAppContainer>
    </ThemeProvider>
  );
};

export default App;
