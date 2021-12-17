import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import TextInputMask, {
  TextInputMaskProps,
} from 'react-native-text-input-mask';

import styled, { useTheme } from 'styled-components/native';
import Text from './text';

const Container = styled.View`
  margin-bottom: 10px;
`;

interface ITextFieldProps extends TextInputMaskProps {
  label?: string;
  mask?: string;
}

function MaskedTextField(
  { label, style, ...rest }: ITextFieldProps,
  ref: React.Ref<TextInput>
) {
  const theme = useTheme();
  return (
    <Container style={style}>
      {!!label && (
        <Text size={13} style={styles.label} bold>
          {label}
        </Text>
      )}
      <TextInputMask
        ref={ref}
        style={[styles.input, { borderColor: theme.colors.primary }]}
        {...rest}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default React.forwardRef(MaskedTextField);
