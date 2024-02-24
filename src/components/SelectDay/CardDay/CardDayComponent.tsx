import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles/general';

interface props {
  isSelected?: boolean;
  dayNumber: number;
  dayOfWeek: string;
}

const CardDayComponent = ({
  isSelected = false,
  dayNumber,
  dayOfWeek,
}: props) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: isSelected ? colors.logoText : colors.background,
      borderColor: colors.logoText,
      borderWidth: 1,
      width: 50,
      height: 55,
      borderRadius: 5,
      marginHorizontal: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCard: {
      fontSize: 12,
      color: isSelected ? colors.background : colors.logoText,
      fontWeight: '700',
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.textCard}>{dayNumber}</Text>
      <Text style={styles.textCard}>{dayOfWeek}</Text>
    </View>
  );
};

export default CardDayComponent;
