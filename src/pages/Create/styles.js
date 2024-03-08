import styled from "styled-components";

export const Container = styled.div`
  main {
    padding: 80px;
  }
  a {
    display: inline-block;

    color: ${({ theme }) => theme.COLORS.RED_1};
    > * {
      display: inline-flexbox;
      align-self: center;
    }
  }

  .input-wrapper {
    display: flex;

    gap: 40px;

    margin: 40px 0;
  }

  label {
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
`;

export const Form = styled.form`
  margin: 40px 0;
`;
