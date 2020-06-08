/**
 * @format
 */
import React from 'react';
import {AppRegistry, View} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import Header from './src/componentes/Header';
import CarList from './src/componentes/CarList';



const App = () => {
    return (
        <View style={{ flex : 1}}>
           <Header titulo = {"CARROS"} />
           <CarList />
        </View>
   
    );
}


AppRegistry.registerComponent(appName, () => App);
