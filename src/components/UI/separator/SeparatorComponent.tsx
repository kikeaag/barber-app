import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../styles/general';

const SeparatorComponent = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    borderColor: colors.logoText,
    borderTopWidth: 0.5,
  },
});

export default SeparatorComponent;
