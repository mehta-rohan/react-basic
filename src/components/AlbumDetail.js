import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card'
import CardItems from './CardItems'
import Button from './Button'
const AlbumDetails=(props)=>{
    return(
        <Card>
            <CardItems>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: props.album.thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardItems>
            <CardItems>
                <Image style={styles.imageStyle} source={{uri:props.album.image}}/>
            </CardItems>    
            <CardItems>
                <Button onPress={()=>Linking.openURL(props.album.url)}>
                    Buy Now
                </Button>
            </CardItems>
        </Card>
    );
}

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    }
}

export default AlbumDetails;