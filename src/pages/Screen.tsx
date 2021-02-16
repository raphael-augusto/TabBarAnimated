import React from 'react';

import { View, StatusBar } from 'react-native';

export default Screen = ({ name }) => (
  <View style={{ flex: 1, backgroundColor: '#293656' }}>
    <StatusBar barStyle="light-content" />
  </View>
);
