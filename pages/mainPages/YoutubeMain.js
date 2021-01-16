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
    SectionList,
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
    { name: "커리", length: "1:10", photo: require("../../constants/curry.jpg") },
    { name: "포", length: "1:20", photo: require("../../constants/pho.jpeg") },
    { name: "치킨", length: "1:50", photo: require("../../constants/chicken.jpg") },
];

const SubHeader = (props) => {
    return (
        <View style={{width: windowWidth, height: windowHeight/11, alignItems: "flex-start", paddingLeft: 20, justifyContent: "center", backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.3,

        elevation: 5,
        }}>
            <Text style={{fontFamily: "noto_bold", fontSize: 17}}>{props.smallTxt}</Text>
            <Text style={{fontFamily: "noto_bold", fontSize: 24, color: "red"}}>#{props.hashTxt}</Text>
        </View>
    );
}
const VideoList = (props) => {
    return (
        <FlatList
            key={"_"}
            numColumns={3}
            data={imageDatas}
            renderItem={({ item }) => {
                return <ListPhoto ITEM_WIDTH={windowWidth / 2.3} item={item.photo} navigation={props.navigation} rest_name={item.name} video_length={item.length}/>;
            }}
            keyExtractor={(item, index) => index.toString()}
            flexDirection= 'column'
            scrollEnabled={true}
        ></FlatList>
    );
}
// SubHeader + VideoList = SubSection
const SubSection = (props) => {
    return (
        <View>
            <SubHeader smallTxt={props.smallTxt} hashTxt={props.hashTxt}></SubHeader>
            <VideoList navigation={props.navigation}></VideoList>
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
            height: windowWidth * (5/17),
            
            shadowOpacity: 0.5,
            shadowRadius: 4
        },
        //headerRight: () => <ProfileLogo touchable={true} navigation={props.navigation} style={{ marginRight: pad*1.2 }}></ProfileLogo>,
    });

    return (
        <SectionList
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
                <>
                    <SubHeader
                        smallTxt={section.smallTxt}
                        hashTxt={section.hashTxt}
                    ></SubHeader>
                    <VideoList
                        imageDatas={section.data}
                        style={{}}
                        navigation={props.navigation}
                        width_divider={2.3}
                    ></VideoList>
                </>
            )}
            stickySectionHeadersEnabled={false}
            renderItem={({ item, section }) => {
                return null;
            }}
            showsHorizontalScrollIndicator={false}
        ></SectionList>
    );
};

const styles = StyleSheet.create({
    logo: {
        marginBottom: 18,
        marginLeft: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default YoutubeMain;
