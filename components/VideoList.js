import React from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    Text,
    Image,
} from "react-native";

import ListPhoto from "../components/ListPhoto";

const windowWidth = Dimensions.get("window").width;

const VideoList = (props) => {
    // props: style, imageDatas, width_divider, navigation, png
    return (
        <FlatList
            style={props.style}
            key={"_"}
            horizontal
            data={props.imageDatas}
            renderItem={({ item }) => {
                return (
                    <ListPhoto
                        ITEM_WIDTH={windowWidth / props.width_divider}
                        item={item.photo}
                        navigation={props.navigation}
                        rest_name={item.name}
                        png={props.png}
                        key={item.id}
                    />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        ></FlatList>
    );
};

export default VideoList;
