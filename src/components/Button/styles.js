import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  height: 48px;
  max-width: 100%;

  margin: 24px 0 42px;
  padding: 32px;
  gap: 8px;

  border-radius: 8px;
  border: none;

  background: ${({ theme }) => theme.COLORS.RED_1};

  justify-content: center;

  color: ${({ theme }) => theme.COLORS.BLACK_0};

  font-size: 16px;
`;
