/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const HomeScreens = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreens</Text>
      <Text>
        <Icon
          name="up"
          size={30}
          color="#900"
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreens;
