// TODO: look up to "SectionList" component
//////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////

import Color from "../../constants/Color";
import CommonStyles from "../../constants/CommonStyle";

import MainNavOptions from "../../components/MainNavOptions";

import SubHeader from "../../components/SubHeader";
import VideoList from "../../components/VideoList";
//////////////////////////////////////////////////////////////////////////

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageDatas = [
    { id: 1, name: "커리", photo: require("../../assets/images/curry.jpg") },
    { id: 2, name: "포", photo: require("../../assets/images/pho.jpeg") },
    { id: 3, name: "치킨", hoto: require("../../assets/images/chicken.jpg") },
];

// SubHeader + VideoList = SubSection
const SubSection = (props) => {
    return (
        <View>
            <SubHeader
                smallTxt={props.smallTxt}
                hashTxt={props.hashTxt}
            ></SubHeader>
            <VideoList
                navigation={props.navigation}
                imageDatas={imageDatas}
                width_divider={2.3}
                style={{}}
            ></VideoList>
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
