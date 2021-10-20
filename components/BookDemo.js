import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';

import BooksWithContext from './BooksWithContext'


const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name="Home"
            component={HomeScreen}
            //options={{ title: 'Welcome' }}
        />

        <Stack.Screen
            name="books"
            component={BooksWithContext} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"thick solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>

         <Button
           title="Go to Books"
           onPress={() =>
             navigation.navigate('books')
                // we're passing a parameter name:'Jane' to the Profile component!
           }
         />

    </View>
  );
};

export default MyStack;
