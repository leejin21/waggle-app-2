import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";

import Color from "../../constants/Color";
import CommonStyles from "../../constants/CommonStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PageName = (props) => {
    // props.navigation.setOptions({

    // });

    return (
        <View>
            <Text>PageName: LiveMain</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PageName;
