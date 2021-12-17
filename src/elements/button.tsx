import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import Text from './text';

const ButtonContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 10px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

type IButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> & {
  children: string;
};

export default function Button({ children, ...rest }: IButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <Text bold>{children}</Text>
    </ButtonContainer>
  );
}
