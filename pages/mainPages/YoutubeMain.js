// TODO: look up to "SectionList" component

import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    Text,
    Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

import ListPhoto from "../../components/ListPhoto";

import Color from "../../constants/Color";
import MainNavOptions from "../../components/MainNavOptions";

import CommonStyles from "../../constants/CommonStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageDatas = [
    { name: "커리", photo: require("../../constants/curry.jpg") },
    { name: "포", photo: require("../../constants/pho.jpeg") },
    { name: "치킨", hoto: require("../../constants/chicken.jpg") },
];

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
const VideoList = (props) => {
    return (
        <FlatList
            key={"_"}
            numColumns={3}
            data={imageDatas}
            renderItem={({ item }) => {
                return (
                    <ListPhoto
                        ITEM_WIDTH={windowWidth / 2.3}
                        item={item.photo}
                        navigation={props.navigation}
                        rest_name={item.name}
                    />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        ></FlatList>
    );
};
// SubHeader + VideoList = SubSection
const SubSection = (props) => {
    return (
        <View>
            <SubHeader
                smallTxt={props.smallTxt}
                hashTxt={props.hashTxt}
            ></SubHeader>
            <VideoList navigation={props.navigation}></VideoList>
        </View>
    );
};

// Page component
const YoutubeMain = (props) => {
    useEffect(() => {
        props.navigation.setOptions(MainNavOptions);
    }, []);

    return (
        <ScrollView>
            <SubSection
                navigation={props.navigation}
                smallTxt={"우리 주변 숨겨진"}
                hashTxt={"지역맛집"}
            ></SubSection>
            <SubSection
                navigation={props.navigation}
                smallTxt={"매운 음식이 땡길때"}
                hashTxt={"매운음식 맛집"}
            ></SubSection>
            <SubSection
                navigation={props.navigation}
                smallTxt={"우리 주변 숨겨진"}
                hashTxt={"지역맛집"}
            ></SubSection>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default YoutubeMain;
