import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 64px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.RED_1};
  }

  .author_info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .author {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  span > svg {
    color: ${({ theme }) => theme.COLORS.RED_1};
  }
`;
