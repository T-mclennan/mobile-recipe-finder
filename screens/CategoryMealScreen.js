import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title='Go to details'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
          });
        }}
      />
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

export default CategoryMealScreen;
