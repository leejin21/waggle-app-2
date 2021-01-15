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
import ListPhoto from "../../components/ListPhoto";
import SubHeader from "../../components/SubHeader";
//////////////////////////////////////////////////////////////////////////

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageDatas = [
    { name: "커리", photo: require("../../assets/images/curry.jpg") },
    { name: "포", photo: require("../../assets/images/pho.jpeg") },
    { name: "치킨", hoto: require("../../assets/images/chicken.jpg") },
];

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
