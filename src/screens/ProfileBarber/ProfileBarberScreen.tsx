/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/general';
import PillComponent from '../../components/UI/pill/PillComponent';
import MonthComponent from '../../components/MonthComponent/MonthComponent';
import SelectDayComponent from '../../components/SelectDay/SelectDayComponent';
import SelectHourComponent from '../../components/SelectHour/SelectHourComponent';

const ProfileBarberScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/barber.jpg')}
          style={{resizeMode: 'cover', width: '100%', height: '100%'}}
        />
        <Text>Foto</Text>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          height: '70%',
        }}>
        <View
          style={{
            height: '100%',
            position: 'relative',
          }}>
          <View
            style={{
              position: 'absolute',
              top: '-25%',
              backgroundColor: colors.background,
              height: '25%',
              width: '100%',
              opacity: 0.85,
              borderRadius: 25,
            }}>
            <View style={{marginTop: 15, marginHorizontal: 23}}>
              <Text style={styles.fontTitle}>Jhon Doe</Text>
              <View
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.fontAverage}>4.5 (15)</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.background,
              height: '110%',
              position: 'absolute',
              top: '-10%',
              width: '100%',
              opacity: 1,
              borderRadius: 20,
            }}>
            <View
              style={{
                marginHorizontal: 23,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 30,
              }}>
              <PillComponent isSelected={true} label="Agenda" />
              <PillComponent isSelected={false} label="Portafolio" />
              <PillComponent isSelected={false} label="Reviews" />
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 23,
            }}>
            <MonthComponent />
            <Text
              style={{
                color: colors.logoText,
                marginTop: 30,
                fontSize: 15,
                fontWeight: '400',
              }}>
              Dia
            </Text>
            <View style={{marginTop: 20}} />
            <SelectDayComponent />
            <Text
              style={{
                color: colors.logoText,
                marginTop: 30,
                fontSize: 15,
                fontWeight: '400',
              }}>
              Hora
            </Text>
            <View style={{marginTop: 20}} />
            <SelectHourComponent />
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              height: '50%',
              width: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: colors.logoText,
                position: 'absolute',
                bottom: 0,
                height: '70%',
                width: '80%',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.background,
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                {' '}
                Viernes, 23 Febrero 2024 - 13:00 hrs
              </Text>
              <View
                style={{
                  backgroundColor: colors.background,
                  borderRadius: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 300,
                  height: 60,
                }}>
                <Text
                  style={{
                    color: colors.logoText,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Continuar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileBarberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerImage: {
    height: '30%',
    backgroundColor: colors.background,
    display: 'flex',
    alignItems: 'center',
  },
  fontTitle: {
    fontSize: 16,
    color: colors.logoText,
    fontWeight: '800',
    // marginTop: 15,
    // marginLeft: 23,
  },
  fontAverage: {
    fontSize: 12,
    color: colors.logoText,
    fontWeight: '800',
    marginTop: 5,
  },
});
