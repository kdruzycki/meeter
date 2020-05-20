import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SuccessButton = ({onPress, text, active = true}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text style={active ? styles.primary : [styles.primary, styles.inactive]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#e67e22',
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
  inactive: {
    backgroundColor: '#bdc3c7',
  },
});

export default SuccessButton;
