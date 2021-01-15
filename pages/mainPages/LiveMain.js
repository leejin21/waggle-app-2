import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    Text,
    Image,
} from "react-native";

import Color from "../../constants/Color";
import MainNavOptions from "../../components/MainNavOptions";
import CommonStyles from "../../constants/CommonStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LiveMain = (props) => {
    useEffect(() => {
        props.navigation.setOptions(MainNavOptions);
    }, []);

    return (
        <View>
            <Text>PageName: LiveMain</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LiveMain;
