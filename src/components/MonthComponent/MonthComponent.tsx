import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/general';

const MonthComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Febrero 2024</Text>
      <View>
        <Text style={styles.title}>_ _</Text>
      </View>
    </View>
  );
};

export default MonthComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: colors.logoText,
    fontWeight: '700',
    flex: 1,
  },
});
