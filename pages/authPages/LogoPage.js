import React from "react";
import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity, Text, Image } from "react-native";

import Color from "../../constants/Color"
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
        <View style={{width:windowWidth, height:windowHeight, backgroundColor:Color.yellow, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Image style={{ width: 200, height: 200 }} source={require('../../constants/logo_white.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default LogoPage;