import styled from 'styled-components';

export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
`;

export const FeedbackLI = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
