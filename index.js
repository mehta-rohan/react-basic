// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('gallery', () => App);

import React from 'react';
import {AppRegistry,Text,View} from 'react-native';
import Headers from './src/components/headers';
import AlbumList from './src/components/AlbumList'

const App = () => {
    return(
        <View style={{flex:1}}>
            <Headers headerText={'My Music'}/>
            <AlbumList />
        </View>
    );
};


AppRegistry.registerComponent('gallery',()=>App);



