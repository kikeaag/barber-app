import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/general';
import SeparatorComponent from '../../components/UI/separator/SeparatorComponent';
import CardComponent from '../../components/UI/card/CardComponent';

const ChoseBarberScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.logo}>BarberApp</Text>
        </View>
        <View>
          <Text style={styles.title}>Selecciona un barbero</Text>
          <SeparatorComponent />
          {/* TODO: se debe de quitar este separador */}
          <View style={{marginTop: 20}} />
          <CardComponent />
          <View style={{marginTop: 20}} />
          <CardComponent />
        </View>
      </View>
    </View>
  );
};

export default ChoseBarberScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  background: {
    marginHorizontal: 23,
  },
  logo: {
    color: colors.logoText,
    fontWeight: '600',
    fontSize: 18,
  },
  header: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.logoText,
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 12,
    color: colors.logoText,
    marginBottom: 20,
  },
  containerButton: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonBottom: {
    position: 'relative',
    height: 60,
    backgroundColor: colors.logoText,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  buttonTextBottom: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.background,
  },
});
