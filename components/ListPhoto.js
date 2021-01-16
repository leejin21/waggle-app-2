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
import { TouchableOpacity } from "react-native-gesture-handler";

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
                    })
                }
            >
                <ImageBackground source={props.item} style={{ ...styles.image__photo, width: ITEM_WIDTH, height: ITEM_HEIGHT }} imageStyle={{ height: PHOTO_HEIGHT, marginTop: GAP }}>
                    <View style={{ flex:1, paddingBottom:3 }}><Text style={{color: "white", fontSize:15, fontFamily:"noto_regular"}}>{props.video_length}</Text></View>
                    <View style={{ flex:1, alignItems:"flex-end" }}><AntDesign name="play" size={ICON_SIZE} color={Color.warmgray}/></View>
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
        marginTop: pad*0.5,
    },
    image__wrapper: {
        margin: pad*0.7,
        borderRadius: BORDER_RADIUS,
        marginBottom: pad*0.4
    },
    image__photo: {
        // photo size: 3:4
        // want: 2:3, and background: black
        flex: 1,
        resizeMode: "contain",
        flexDirection: "row",

        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "black",
        borderRadius: BORDER_RADIUS,
        padding: BORDER_RADIUS/1.8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,

        elevation: 5,
    },
    info__wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: pad,
    },
    info__name: {
        color: Color.black,
        fontFamily: "noto_regular",
        fontSize: windowHeight / 53,
        flex: 6,
        textAlign: "center",
        marginBottom: pad*0.4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.28,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default ListPhoto;
