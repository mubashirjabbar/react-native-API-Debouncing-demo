import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Listing = props => {
  const {name, age, count} = props;

  return (
    <View style={styles.listingMain}>
      <Text style={styles.textStyle}>{`Name: ${name}`}</Text>
      <Text style={styles.textStyle}>{`Age: ${age}`}</Text>
      <Text style={styles.textStyle}>{`Count: ${count}`}</Text>
    </View>
  );
};

export default Listing;
