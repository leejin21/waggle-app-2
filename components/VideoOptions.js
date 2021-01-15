import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default {
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerStyle: {
        shadowColor: "transparent",
        height: windowWidth * (5 / 16),
    },
    headerTitleStyle: {
        color: "black",
        fontSize: 30,
        fontFamily: "noto_bold",
    },
    headerTintColor: "grey",
};
