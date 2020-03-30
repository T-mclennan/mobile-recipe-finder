import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meals.id === 'm1' || meals.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

export default FavoritesScreen;
