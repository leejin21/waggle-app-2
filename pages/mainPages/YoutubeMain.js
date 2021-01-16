// TODO: look up to "SectionList" component

import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

import ListPhoto from "../../components/ListPhoto"

import Color from "../../constants/Color"
import CommonStyles from "../../constants/CommonStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageDatas1 = [
    { name: "포이푸", photo: require("../../assets/images/thumbnail_1.png"), uri: "../../assets/images/gangreung_poipu.mp4" },
    { name: "데일리 오아시스", photo: require("../../assets/images/thumbnail_2.png"), uri: "../../assets/images/songdo_dailyoasis.mp4" },
    { name: "버거룸181", photo: require("../../assets/images/thumbnail_3.png"), uri: "../../assets/images/songdo_bugerroom.mp4" },
];
const imageDatas2 = [
    { name: "풀사이드228", photo: require("../../assets/images/thumbnail_4.png"), uri: "../../assets/images/songdo_fullside.mp4" },
    { name: "", photo: null, uri: null },
    { name: "", photo: null, uri: null },
];
const imageDatas3 = [
    { name: "", photo: null, uri: null },
    { name: "", photo: null, uri: null },
    { name: "", photo: null, uri: null },
];

const SubHeader = (props) => {
    return (
        <View style={{...styles.shadow__subheader, width: windowWidth, height: windowHeight/12, alignItems: "flex-start", paddingLeft: 23, paddingTop: 2, justifyContent: "center", backgroundColor: "white"}}>
            <Text style={{fontFamily: "noto_bold", fontSize: 17}}> {props.smallTxt}</Text>
            <Text style={{fontFamily: "noto_bold", fontSize: 24, color: "red"}}>#{props.hashTxt}</Text>
        </View>
    );
}
const VideoList = (props) => {
    return (
        <FlatList
            key={"_"}
            numColumns={3}
            data={props.imageDatas}
            renderItem={({ item }) => {
                return <ListPhoto ITEM_WIDTH={windowWidth / 2.3} item={item.photo} navigation={props.navigation} rest_name={item.name} uri_video={item.uri}/>;
            }}
            keyExtractor={(item, index) => index.toString()}
        ></FlatList>
    );
}
// SubHeader + VideoList = SubSection
const SubSection = (props) => {
    return (
        <View>
            <SubHeader smallTxt={props.smallTxt} hashTxt={props.hashTxt}></SubHeader>
            <VideoList navigation={props.navigation} imageDatas={props.imageDatas}></VideoList>
        </View>
    );
}

// Page component
const YoutubeMain = (props) => {
    props.navigation.setOptions({
        headerBackTitleVisible: false,
        headerTitle: (props) => <Image style={{ ...styles.logo, width: 130, height: 130 }} source={require("../../constants/logo_white.png")} resizeMode="contain"></Image>,
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerStyle: {
            backgroundColor: Color.yellow,
            //width: windowWidth,
            height: windowWidth * (5/16),
            
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.28,
            shadowRadius: 3.84,
    
            elevation: 5,
        },
        //headerRight: () => <ProfileLogo touchable={true} navigation={props.navigation} style={{ marginRight: pad*1.2 }}></ProfileLogo>,
    });

    return (
        <ScrollView>
            <SubSection navigation={props.navigation} smallTxt={"우리 주변 숨겨진"} hashTxt={"지역맛집"} imageDatas={imageDatas1}></SubSection>
            <SubSection navigation={props.navigation} smallTxt={"매운 음식이 땡길때"} hashTxt={"매운음식 맛집"} imageDatas={imageDatas2}></SubSection>
            <SubSection navigation={props.navigation} smallTxt={"특색 있는"} hashTxt={"지역맛집"} imageDatas={imageDatas3}></SubSection>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    shadow__subheader: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4.5,

        elevation: 5,
    },
    logo: {
        marginLeft: 18, 
        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.28,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default YoutubeMain;