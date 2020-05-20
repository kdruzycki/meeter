import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SuccessButton from '../components/SuccessButton';
import globalStyle from '../styles/globalStyles';

const Join = ({navigation}) => (
  <View style={styles.centerView}>
    <Text style={globalStyle.title}>Dołącz do spotkania</Text>

    <Text style={globalStyle.label}>Id spotkania</Text>
    <TextInput style={globalStyle.inputField} editable maxLength={40} />

    <SuccessButton
      /* TODO: Sprawdzanie formularza */
      /* TODO: Wysyłanie formularza */
      onPress={() => navigation.navigate('Meeting')}
      text="Dołącz"
    />
  </View>
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Join;
