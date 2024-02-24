import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles/general';
import {useNavigation} from '@react-navigation/native';

const CardComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.subtitleBlack}>Jhon Doe</Text>
        <Text style={styles.subtitleBlackMin}>4.8 (25)</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('ProfileBarber' as never);
        }}>
        <Text style={styles.buttonText}>Seleccionar</Text>
      </Pressable>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.logoText,
    width: '100%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  image: {
    backgroundColor: colors.gray,
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  containerText: {
    alignItems: 'center',
  },
  subtitleBlack: {
    fontWeight: '600',
    fontSize: 12,
    color: colors.background,
  },
  subtitleBlackMin: {
    fontWeight: '600',
    fontSize: 10,
    color: colors.background,
  },
  button: {
    backgroundColor: colors.background,
    borderRadius: 5,
    height: 24,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.logoText,
    fontWeight: '600',
    fontSize: 8,
  },
});
