import styled from "styled-components";

export const Container = styled.span`
  margin: 0 8px;
  padding: 5px 15px;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.BLACK_3};

  text-align: center;
  font-family: "Roboto", serif;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE_3};
`;
