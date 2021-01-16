import React from "react";
import { Dimensions, Image } from "react-native";

import Color from "../constants/Color";

const windowWidth = Dimensions.get("window").width;

export default {
    headerBackTitleVisible: false,
    headerTitle: (props) => (
        <Image
            style={{ width: 130, height: 130 }}
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

        // 밑에 줄 그인 거 없애기 위함
        shadowColor: "transparent",
    },
    //headerRight: () => <ProfileLogo touchable={true} navigation={props.navigation} style={{ marginRight: pad*1.2 }}></ProfileLogo>,
};
