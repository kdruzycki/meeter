import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const Home = ({navigation}) => (
  <View style={styles.view}>
    <Text style={styles.logo}>Meeter</Text>
    <PrimaryButton
      text="Zorganizuj spotkanie"
      onPress={() => navigation.navigate('InitMeeting')}
    />
    <PrimaryButton
      text="Dołącz do spotkania"
      onPress={() => navigation.navigate('Join')}
    />
    <PrimaryButton
      onPress={() => navigation.navigate('Home')}
      text="Ustawienia"
    />
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Pacifico-Regular',
    color: '#f39c12',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Home;
