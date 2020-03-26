import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default MealDetailsScreen;
