import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardComponent from './Card/CardComponent';

const hours = [
  {
    id: 1,
    isSelected: false,
    hour: '12:00',
  },
  {
    id: 2,
    isSelected: true,
    hour: '13:00',
  },
  {
    id: 3,
    isSelected: false,
    hour: '14:00',
  },
  {
    id: 4,
    isSelected: false,
    hour: '15:00',
  },
  {
    id: 5,
    isSelected: false,
    hour: '16:00',
  },
];

const SelectHourComponent = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {hours.map(hour => {
          return <CardComponent key={hour.id} {...hour} />;
        })}
        {/* <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent /> */}
      </View>
    </ScrollView>
  );
};

export default SelectHourComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
