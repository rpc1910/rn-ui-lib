import * as React from 'react';
import { View } from 'react-native';
import { ThemeLibProvider, TextField, Button, Text } from '@rpc1910/ui';

export default function App() {
  return (
    <ThemeLibProvider issuer="themeB">
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <TextField placeholder="input" />
        <Button>Click-me</Button>
        <Text>Olá mundo Text</Text>
      </View>
    </ThemeLibProvider>
  );
}
