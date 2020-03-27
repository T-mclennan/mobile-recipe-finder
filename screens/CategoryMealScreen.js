import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { CATEGORY } from '../data/dummy-data';

const selectCategory = CATEGORY.find(cat => cat.id === catId);

const CategoryMealScreen = props => {
  const catId = props.navigation.getParams('categoryId');
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectCategory.title}</Text>
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
