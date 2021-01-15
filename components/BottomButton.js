import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Color from "../constants/Color";

const windowHeight = Dimensions.get("window").height;
const pad = windowHeight / 60; //10

const BottomButton = (props) => {
    // props: active, onPress,
    //        style_back_color(optional: in case of changing background color, ex: {backgroundColor: Colors.mid_grey})
    return props.active ? (
        <TouchableOpacity
            style={{ ...styles.bottom_button, ...props.style_back_color }}
            onPress={props.onPress}
        >
            {props.children}
        </TouchableOpacity>
    ) : (
        <View
            style={{
                ...styles.bottom_button,
                backgroundColor: "grey",
                ...props.style_back_color,
            }}
        >
            {props.children}
        </View>
    );
};

export default BottomButton;

const styles = StyleSheet.create({
    bottom_button: {
        backgroundColor: Color.yellow,
        padding: pad,
        paddingBottom: pad,
        width: "100%",
    },
});
