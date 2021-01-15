import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SubHeader = (props) => {
    // props: smallTxt, hashTxt
    return (
        <View style={styles.wrapper}>
            <Text style={styles.smallTxt}>{props.smallTxt}</Text>
            <Text style={styles.hashTxt}>#{props.hashTxt}</Text>
        </View>
    );
};

export default SubHeader;

const styles = StyleSheet.create({
    wrapper: {
        width: windowWidth,
        height: windowHeight / 12,
        alignItems: "flex-start",
        paddingLeft: 20,
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    smallTxt: {
        fontFamily: "noto_regular",
        fontSize: 17,
    },
    hashTxt: {
        fontFamily: "noto_bold",
        fontSize: 24,
        color: "red",
    },
});
