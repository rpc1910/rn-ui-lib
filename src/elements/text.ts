import styled, { css } from 'styled-components/native';

interface ITextProps {
  size?: number;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
}

export default styled.Text<ITextProps>`
  font-size: ${({ size }) => size || 15}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family};
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ underline, theme }) =>
    underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${theme.colors.text};
    `}
`;
