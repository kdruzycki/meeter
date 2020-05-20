import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet, TextInput} from 'react-native';
import SuccessButton from '../components/SuccessButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import globalStyle from '../styles/globalStyles';
import gloabalStyles from '../styles/globalStyles';

const InitMeeting = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const changeDate = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setDate(selectedDate || date);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const formatDate = date => {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${d}.${m < 10 ? '0' + m : m}.${y}`;
  };

  const validName = name => {
    let minLen = 5;
    let maxLen = 32;

    if (name.length < minLen)
      return {valid: false, alert: `Nazwa musi mieć minimum ${minLen} znaków`};

    if (name.length > maxLen)
      return {valid: false, alert: `Nazwa musi mieć maksimum ${maxLen} znaków`};

    if (!name.match(/^[0-9a-zA-Z\-\_\s]+$/))
      return {valid: false, alert: 'Niedozwolone znaki'};

    return {valid: true};
  };

  const validDate = date => {
    let currDate = new Date();

    if (date.setHours(0, 0, 0, 0) < currDate.setHours(0, 0, 0, 0))
      return {valid: false, alert: `Podaj przyszłą datę`};

    return {valid: true};
  };

  const validAddress = address => {
    let minLen = 3;

    if (address.length < minLen)
      return {valid: false, alert: `Adres musi mieć minimum ${minLen} znaków`};

    if (!address.match(/^[0-9a-zA-Z\-\_\s]+$/))
      return {valid: false, alert: 'Niedozwolone znaki'};

    return {valid: true};
  };

  return (
    <View>
      <Text style={globalStyle.title}>Zorganizuj spotkaniee</Text>

      <TextInput
        placeholder="Nazwa spotkania"
        style={globalStyle.inputField}
        editable
        maxLength={32}
        value={name}
        onChangeText={text => setName(text)}
      />
      {!validName(name).valid && (
        <Text style={gloabalStyles.inputAlert}>{validName(name).alert}</Text>
      )}

      <Text style={globalStyle.inputField} onPress={showDatepicker}>
        {formatDate(date)}
      </Text>
      {!validDate(date).valid && (
        <Text style={gloabalStyles.inputAlert}>{validDate(date).alert}</Text>
      )}
      {show && <DateTimePicker value={date} onChange={changeDate} />}

      <TextInput
        placeholder="Adres"
        style={globalStyle.inputField}
        editable
        maxLength={64}
        value={address}
        onChangeText={text => setAddress(text)}
      />
      {!validAddress(address).valid && (
        <Text style={gloabalStyles.inputAlert}>
          {validAddress(address).alert}
        </Text>
      )}

      <SuccessButton
        /* TODO: Wysyłanie formularza */
        active={
          validDate(date).valid &&
          validName(name).valid &&
          validAddress(address).valid
        }
        pointerEvents="none"
        onPress={() => navigation.navigate('Meeting')}
        text="Potwierdź"
      />
    </View>
  );
};

export default InitMeeting;
