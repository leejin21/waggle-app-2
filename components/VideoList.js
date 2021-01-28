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
const windowHeight = Dimensions.get("window").height;

const VideoList = (props) => {
    // props: style, imageDatas, width_divider, navigation, png
    return (
        <FlatList
            style={{ paddingBottom: windowHeight / 60, ...props.style }}
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
                        uri_video={item.uri}
                        live={props.live}
                        key={item.id}
                    />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        ></FlatList>
    );
};

export default VideoList;
