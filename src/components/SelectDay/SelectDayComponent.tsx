import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardDayComponent from './CardDay/CardDayComponent';

const days = [
  {
    id: 1,
    dayNumber: 22,
    dayOfWeek: 'J',
    isSelected: true,
  },
  {
    id: 2,
    dayNumber: 23,
    dayOfWeek: 'V',
    isSelected: false,
  },
  {
    id: 3,
    dayNumber: 24,
    dayOfWeek: 'S',
    isSelected: false,
  },
  {
    id: 4,
    dayNumber: 25,
    dayOfWeek: 'D',
    isSelected: false,
  },
  {
    id: 5,
    dayNumber: 26,
    dayOfWeek: 'L',
    isSelected: false,
  },
  {
    id: 6,
    dayNumber: 27,
    dayOfWeek: 'Ma',
    isSelected: false,
  },
  {
    id: 7,
    dayNumber: 28,
    dayOfWeek: 'M',
    isSelected: false,
  },
];

const SelectDayComponent = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {days.map(day => (
          <CardDayComponent key={day.id} {...day} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SelectDayComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
