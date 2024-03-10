import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: space-between;

  padding: 24px 64px;

  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_3};

  > span {
  }

  > * {
    align-items: center;
  }
  > *:hover {
    cursor: pointer;
  }
`;

export const Brand = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.RED_1};
`;

export const Search = styled.div``;
