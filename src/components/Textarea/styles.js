import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;

  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
