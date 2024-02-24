import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles/general';

interface Props {
  isSelected?: boolean;
  hour: string;
}

const CardComponent = ({isSelected = false, hour}: Props) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: isSelected ? colors.logoText : colors.background,
      width: 70,
      height: 35,
      borderColor: colors.logoText,
      borderWidth: 1,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    text: {
      fontSize: 12,
      color: isSelected ? colors.background : colors.logoText,
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{hour}</Text>
    </View>
  );
};

export default CardComponent;
