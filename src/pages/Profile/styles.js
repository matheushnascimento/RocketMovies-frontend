import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.RED_2};

    display: flex;
    align-items: center;

    padding: 0 124px;

    > a {
      position: absolute;
      display: flex;
      align-items: center;

      gap: 8px;
      left: 50px;

      color: ${({ theme }) => theme.COLORS.RED_1};
    }

    svg {
      font-size: 24px;
    }
  }

  button {
    width: 100vh;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;

    margin-left: 25%;
  }

  > label {
    height: 48px;
    width: 48px;

    background: ${({ theme }) => theme.COLORS.RED_1};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 70px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      height: 20px;
      width: 20px;

      color: ${({ theme }) => theme.COLORS.BLACK_1};
    }
  }
`;
