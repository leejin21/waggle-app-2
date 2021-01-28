import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import Color from "../constants/Color";

const windowWidth = Dimensions.get("window").width;

export default {
    headerBackTitleVisible: false,
    headerTitle: (props) => (
        <Image
            style={{ ...styles.logo, width: 130, height: 130 }}
            source={require("../constants/logo_white.png")}
            resizeMode="contain"
        ></Image>
    ),
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
    },
    headerStyle: {
        backgroundColor: Color.yellow,
        //width: windowWidth,
        height: windowWidth * (5 / 16),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.28,
        shadowRadius: 3.84,

        elevation: 5,
    },
    //headerRight: () => <ProfileLogo touchable={true} navigation={props.navigation} style={{ marginRight: pad*1.2 }}></ProfileLogo>,
};

const styles = StyleSheet.create({
    logo: {
        marginLeft: 18,
        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.28,
        shadowRadius: 3.84,

        // elevation: 5,
    },
});
