import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.data.title}</Text>
        </View>
    );
};

export default AlbumDetail;
