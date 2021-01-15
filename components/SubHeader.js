import React from "react";
import { View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SubHeader = (props) => {
    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight / 12,
                alignItems: "flex-start",
                paddingLeft: 20,
                justifyContent: "center",
                backgroundColor: "white",
            }}
        >
            <Text style={{ fontFamily: "noto_regular", fontSize: 17 }}>
                {props.smallTxt}
            </Text>
            <Text
                style={{ fontFamily: "noto_bold", fontSize: 24, color: "red" }}
            >
                #{props.hashTxt}
            </Text>
        </View>
    );
};

export default SubHeader;
