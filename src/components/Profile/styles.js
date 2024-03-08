import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div span {
    color: ${({ theme }) => theme.COLORS.WHITE_2};
    font-weight: 700;
  }

  > div a {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_3};
  }
`;
