import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/general';
import SeparatorComponent from '../components/UI/separator/SeparatorComponent';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.logo}>BarberApp</Text>
        </View>
        <View>
          <Text style={styles.title}>Hey Usuario!</Text>
          <Text style={styles.subtitle}>Sábado, 9 Enero</Text>
          <SeparatorComponent />
          <View style={{marginTop: 20}} />
          <Text style={styles.subtitle}>Últimas visitas</Text>
          <View style={styles.card}>
            <View style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.subtitleBlack}>Jhon Doe</Text>
              <Text style={styles.subtitleBlackMin}>4.8 (25)</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Agendar Cita</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <View style={styles.buttonBottom}>
          <Text style={styles.buttonTextBottom}>Quiero una Cita!</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
    alignItems: 'flex-start',
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
  containerText: {
    alignItems: 'center',
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
