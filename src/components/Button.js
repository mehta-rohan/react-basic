import React from 'react';
import { Text,TouchableOpacity } from 'react-native'



const buyNow = function(){

}

const Button = (props) => {
        const {onPress,children} = props;
        const {buttonStyle,textStyle}= style;
        return (
                <TouchableOpacity onPress={onPress} style={buttonStyle}>         
                        <Text style={textStyle}>{children}</Text>
                </TouchableOpacity>        
        );
}



const style = {
        buttonStyle :{
                flex:1,
                alignSelf:'stretch',
                backgroundColor:'#fff',
                borderWidth:1,
                borderRadius:5,
                borderColor:'#007aff',
                marginLeft:5,
                marginRight:5
        },
        textStyle:{
                alignSelf:'center',
                color:'#007aff',
                fontSize:16,
                fontWeight:'600',
                paddingTop:10,
                paddingBottom:10
        }
}
export default Button;