import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import SuccessButton from '../components/SuccessButton';
import globalStyle from '../styles/globalStyles';

const Meeting = ({navigation}) => (
  <View style={styles.centerView}>
    {/* TODO: Map Button */}
    <Text style={globalStyle.title}>"{'Nazwa Spotkania'}"</Text>

    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.body}>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Jan Kowlski</Text>
        </View>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Anna Nowak</Text>
        </View>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Wojciech Nowak</Text>
        </View>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Adam Kowlski</Text>
        </View>
      </View>
    </ScrollView>

    <Text style={globalStyle.label}>Email</Text>
    <TextInput style={globalStyle.inputField} editable maxLength={40} />

    <SuccessButton
      /* TODO: Sprawdzanie formularza */
      /* TODO: Wysyłanie formularza */
      onPress={() => {
        Alert.alert('Wysłano zaproszenie');
      }}
      text="Zaproś"
    />
  </View>
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
  },
  userCard: {
    height: 100,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  userName: {
    margin: 10,
    fontSize: 22,
    fontWeight: '700',
  },
});

export default Meeting;
