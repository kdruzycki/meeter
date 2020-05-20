import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PrimaryButton = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text style={styles.primary}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    fontFamily: 'Lato-Bold',
    width: 200,
    textAlign: 'center',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 20,
    margin: 10,
    alignSelf: 'center',
  },
});

export default PrimaryButton;
