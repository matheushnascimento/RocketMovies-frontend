import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;

  margin: 8px 0;
  padding: 19px 24px;

  background: ${({ theme }) => theme.COLORS.BLACK_2};

  border-radius: 10px;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_1};
    }
  }
  > svg {
    margin: 0 16px;
  }
`;
