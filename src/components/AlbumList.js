import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// const AlbumList = (props)=>{
class AlbumList extends Component{


    state = { albums:[] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({albums: res.data}));
    }

    renderAlbum(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );                
    }

    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}

export default AlbumList;