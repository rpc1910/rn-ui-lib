import styled from 'styled-components/native';

export default styled.TextInput`
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  padding: 10px;
`;
