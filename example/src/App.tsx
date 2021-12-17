import * as React from 'react';
import { View } from 'react-native';
import {
  ThemeLibProvider,
  TextField,
  MaskedTextField,
  Button,
  Text,
} from '@rpc1910/ui';

export default function App() {
  return (
    <ThemeLibProvider>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <TextField placeholder="input" label="Label do input" />
        <MaskedTextField
          label="Masked Input"
          placeholder="(00) 00000-0000"
          mask={'([00]) [00000]-[0000]'}
        />
        <Button>Click-me</Button>
        <Text>Olá mundo Text</Text>
      </View>
    </ThemeLibProvider>
  );
}
