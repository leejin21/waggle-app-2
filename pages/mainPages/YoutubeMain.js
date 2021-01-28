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
    { id: 1, name: "커리", photo: require("../../assets/images/curry.jpg") },
    { id: 2, name: "포", photo: require("../../assets/images/pho.jpeg") },
    { id: 3, name: "치킨", hoto: require("../../assets/images/chicken.jpg") },
];

const SECTIONS = [
    {
        smallTxt: "우리 주변 숨겨진",
        hashTxt: "지역맛집",
        data: [
            {
                id: 1,
                name: "송도 버거룸181",
                photo: require("../../assets/images/song_burger.png"),
                uri:
                    "https://kr.object.ncloudstorage.com/waggle-video/songdo_burger.mp4",
            },
            {
                id: 2,
                name: "송도 데일리 오아시스",
                photo: require("../../assets/images/song_daily.png"),
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
                id: 3,
                name: "송도 풀사이드",
                hoto: require("../../assets/images/song_pool.png"),
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
        ],
    },
    {
        smallTxt: "매운 음식이 땡길때",
        hashTxt: "매운음식 맛집",
        data: [
            {
                id: 1,
                name: "부산 할매집 원조복국",
                photo: require("../../assets/images/busan_ha.png"),
                uri:
                    "https://kr.object.ncloudstorage.com/waggle-video/busan_bok.mp4",
            },
            {
                id: 2,
                name: "열라열라 엽떡",
                photo: require("../../assets/images/rice.png"),
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            // {
            //     id: 3,
            //     name: "치킨",
            //     hoto: require("../../assets/images/temp.jpg"),
            // },
        ],
    },
    {
        smallTxt: "특색 있는",
        hashTxt: "디저트 맛집",
        data: [
            {
                id: 1,
                name: "부산 메종꽃데",
                photo: require("../../assets/images/busan_me.png"),
                uri:
                    "https://kr.object.ncloudstorage.com/waggle-video/busan_me.mp4",
            },
            {
                id: 2,
                name: "강릉 포이푸",
                photo: require("../../assets/images/gang_po.png"),
                uri:
                    "https://kr.object.ncloudstorage.com/waggle-video/gang_po.mp4",
            },
            // {
            //     id: 3,
            //     name: "치킨",
            //     hoto: require("../../assets/images/temp.jpg"),
            // },
        ],
    },
];

// Page component
const YoutubeMain = (props) => {
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

const styles = StyleSheet.create({});

export default YoutubeMain;
