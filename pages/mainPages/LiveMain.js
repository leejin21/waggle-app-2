import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    Text,
    Image,
    SectionList,
    SafeAreaView,
} from "react-native";

import Color from "../../constants/Color";
import MainNavOptions from "../../components/MainNavOptions";

import SubHeader from "../../components/SubHeader";
import VideoList from "../../components/VideoList";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SECTIONS = [
    {
        smallTxt: "지금 바로 생생하게!",
        hashTxt: "라이브 온",
        data: [
            {
                id: 1,
                photo: require("../../assets/images/yogurt.png"),
                name: "요거트볼 맛집[포이푸]",
                video:
                    "https://kr.object.ncloudstorage.com/waggle-video/yogurt.mp4",
            },
            {
                id: 2,
                photo: require("../../assets/images/coffee.png"),
                name: "루프탑 맛집[카히]",
                video:
                    "https://kr.object.ncloudstorage.com/waggle-video/yogurt.mp4",
            },
            {
                id: 3,
                photo: require("../../assets/images/kkomak.png"),
                name: "꼬막 맛집[꼼꼼]",
                video:
                    "https://kr.object.ncloudstorage.com/waggle-video/yogurt.mp4",
            },
        ],
    },
];

const footer = ({ section }) => {
    return (
        <View
            style={{
                backgroundColor: "white",
                height: windowHeight / 10,
            }}
        ></View>
    );
};

const LiveMain = (props) => {
    return (
        <SectionList
            style={{ flex: 1 }}
            // stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
                <>
                    <SubHeader
                        smallTxt={section.smallTxt}
                        hashTxt={section.hashTxt}
                    ></SubHeader>
                    <VideoList
                        imageDatas={section.data}
                        style={{ padding: 15 }}
                        navigation={props.navigation}
                        width_divider={1.3}
                        live={true}
                    ></VideoList>
                </>
            )}
            stickySectionHeadersEnabled={false}
            renderItem={({ item, section }) => {
                return null;
            }}
            showsHorizontalScrollIndicator={true}
            renderSectionFooter={footer}
        ></SectionList>
    );
};

const styles = StyleSheet.create({});

export default LiveMain;
