import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles/general';

const PillComponent = ({isSelected, label}: any) => {
  const styles = StyleSheet.create({
    container: {
      width: 80,
      height: 30,
      backgroundColor: isSelected ? colors.logoText : colors.background,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: colors.gray,
      borderWidth: 1,
    },
    font: {
      fontSize: 13,
      color: isSelected ? colors.background : colors.gray,
      fontWeight: '800',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        { label }
      </Text>
    </View>
  );
};

export default PillComponent;
