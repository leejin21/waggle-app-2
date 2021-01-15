import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import WaggleNavigator from "./navigation/WaggleNavigator";

export default function App() {
    const [loaded] = useFonts({
        noto_bold: require("./assets/fonts/NotoSansCJKkr-Bold.otf"),
        noto_regular: require("./assets/fonts/NotoSansCJKkr-Regular.otf"),
    });

    if (!loaded) {
        return <AppLoading></AppLoading>;
    }

    return <WaggleNavigator></WaggleNavigator>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
