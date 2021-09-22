import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Omelets from '../assets/omelets'

const omeletRecipes = Omelets()

const DATA = omeletRecipes.map((x) => {
  x.id = x.href
  return(x)
})


const Item = ({ title, ingredients, thumbnail}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text>{ingredients.trim()}</Text>
        <Text> {thumbnail} </Text>
      </View>
);

const ListDemoScreen = () => {
  const renderItem = ({ item }) => (
    <View>
      <Item
          title={item.title}
          ingredients={item.ingredients}
          thumbnail={item.thumbnail}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32,
                    backgroundColor:'red'}}>
         Omelet Recipes
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.href}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex:4,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListDemoScreen;
