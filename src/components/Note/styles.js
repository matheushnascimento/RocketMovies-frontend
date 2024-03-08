import styled from "styled-components";

export const Container = styled.button`
  height: 222px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  grid-column: span 2;

  margin-top: 24px;
  padding: 32px;

  border-radius: 16px;
  border: none;
  background: ${({ theme }) => theme.COLORS.BLACK_4};

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_2};
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    font-family: "Roboto", serif;

    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
`;
