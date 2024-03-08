import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  > a {
    justify-self: end;
  }
`;
