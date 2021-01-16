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
                size={26}
                color="white"
                style={styles.buttom__icon}
            />
            <Text style={styles.buttom__text}>픽하고 쿠폰받기</Text>
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
    },
    buttom__icon: {
        paddingTop: 5,
        marginHorizontal: 10,
    },
    buttom__text: {
        fontFamily: "noto_bold",
        fontSize: font * 1.8,
        color: "white",
    },
});
