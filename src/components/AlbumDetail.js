import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// {album} was just props and inside the function props.album.title | props.album.artist | etc 
// was destructed below
const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image } = album;
    // destructure styles
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbContainer ,
        headerTitle,
        albumImage
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbContainer}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTitle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>  
            </CardSection>

            <CardSection>
                <Image 
                    source={{ uri: image }}
                    style={albumImage}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTitle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;
