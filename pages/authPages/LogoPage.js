import React from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";

import Color from "../../constants/Color";
import CommonStyles from "../../constants/CommonStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LogoPage = (props) => {
    props.navigation.setOptions({
        headerTransparent: true,
        headerTitle: "",
        headerBackTitleVisible: false,
        headerStyle: {
            shadowColor: "transparent",
        },
    });

    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                backgroundColor: Color.yellow,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
            >
                <View style={styles.circle}></View>
                <View style={styles.circle__small}></View>
                <Image
                    style={{
                        width: size,
                        height: size,
                        zIndex: 1,
                        position: "absolute",
                        left: 77,
                        top: 60,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 1,

                        elevation: 5,
                    }}
                    source={require("../../constants/logo_yellow.png")}
                ></Image>
            </TouchableOpacity>
        </View>
    );
};

const radius = 125;
const radius__small = 72;
const size = 122;

const styles = StyleSheet.create({
    circle: {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7,
    },
    circle__small: {
        width: radius__small * 2,
        height: radius__small * 2,
        borderRadius: radius__small,
        backgroundColor: Color.yellow,
        zIndex: 1,
        position: "absolute",
        right: -45,
        top: -45,

        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.02,
        shadowRadius: 3,
    },
});

export default LogoPage;
