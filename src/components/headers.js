import React from 'react';
import {Text,View} from 'react-native'


const Headers = (properties) =>{
    const {textStyle,viewStyle} = styles;    
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{properties.headerText}</Text>
        </View>
    );
};


const styles = {
    textStyle:{
        fontSize: 20
    },
    viewStyle:{
        backgroundColor: '#8C8C9C',
        justifyContent:'center',
        alignItems:'center',
        height:90,
        paddingTop:15,
        shadowColor:'#666666',
        shadowOffset:{width:0,heigth:20},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'
    }
}

export default Headers;
