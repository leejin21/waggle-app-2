/*
    주의사항
    다른 element의 flex 총합은 14를 만족해야 함.
*/

import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import BottomButton from "./BottomButton";
const windowHeight = Dimensions.get("window").height;
const font = windowHeight / 65;

const PickCouponButton = ({ navigation }) => {
    return (
        <BottomButton
            onPress={() => {}}
            active={true}
            style_back_color={styles.buttom}
        >
            <FontAwesome5
                name="check-double"
                size={30}
                color="white"
                style={styles.buttom__icon}
            />
            <Text style={styles.buttom__text}>픽하고 쿠폰받기   </Text>
        </BottomButton>
    );
};

export default PickCouponButton;

const styles = StyleSheet.create({
    buttom: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 4,

        elevation: 5,

        borderRadius: 88,
    },
    buttom__icon: {
        paddingTop: 5,
        marginHorizontal: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3,

        elevation: 5,
    },
    buttom__text: {
        fontFamily: "noto_bold",
        fontSize: font * 2,
        color: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3,

        elevation: 5,
    },
});
