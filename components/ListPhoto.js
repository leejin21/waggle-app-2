import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Color from "../constants/Color";

const windowHeight = Dimensions.get("window").height;
const pad = windowHeight / 80;

const BORDER_RADIUS = pad * 2;

const ListPhoto = (props) => {
    // TODO PHOTO HEIGHT 이미지에서 받아와서 맞춰 주기: 비율 관련해서 계산.
    // props: live(bool)
    const ITEM_WIDTH = props.ITEM_WIDTH - pad * 2.5;
    const ITEM_HEIGHT = (ITEM_WIDTH * 240) / 150;
    const PHOTO_HEIGHT = (ITEM_WIDTH * 4) / 3;
    // const PHOTO_WIDTH= (ITEM_HEIGHT)

    const GAP = (ITEM_HEIGHT - PHOTO_HEIGHT) / 2;
    const ICON_SIZE = pad * 3;

    const nav_where = props.live ? "LiveVideo" : "YoutubeVideo";

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.image__wrapper}
                onPress={() =>
                    props.navigation.navigate(nav_where, {
                        title: props.rest_name,
                        uri_video: props.uri_video,
                    })
                }
            >
                <ImageBackground
                    source={props.item}
                    style={{
                        ...styles.image__photo,
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                    }}
                    imageStyle={{ borderRadius: BORDER_RADIUS }}
                >
                    <View style={{ alignItems: "flex-end" }}>
                        <AntDesign
                            name="play"
                            size={ICON_SIZE}
                            color={Color.warmgray}
                        />
                    </View>
                </ImageBackground>
            </TouchableHighlight>
            <View style={styles.info__wrapper}>
                <Text style={styles.info__name}>{props.rest_name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: pad * 1.5,
    },
    image__wrapper: {
        margin: pad,
        borderRadius: BORDER_RADIUS,
    },
    image__photo: {
        // photo size: 3:4
        // want: 2:3, and background: black
        flex: 1,
        flexDirection: "row",
        resizeMode: "cover",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "black",
        borderRadius: BORDER_RADIUS,
        padding: BORDER_RADIUS / 1.8,
    },
    info__wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: pad * 1.5,
    },
    info__name: {
        color: "black",
        fontFamily: "noto_regular",
        fontSize: windowHeight / 53,
        flex: 6,
        textAlign: "center",
    },
});

export default ListPhoto;
