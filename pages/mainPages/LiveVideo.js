import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import VideoPlayer from "expo-video-player";

import Color from "../../constants/Color";
import VideoOptions from "../../components/VideoOptions";
import PickCouponButton from "../../components/PickCouponButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const font = windowHeight / 65;

const CHATS = [
    { name: "먹보송송", content: "아 배고프다ㅜㅜ" },
    { name: "희희희희", content: "맛있겠닿ㅎ" },
    { name: "ASAP", content: "오늘 점심은 ㅎ파스타 확정" },
    { name: "눈눈이", content: "빨리 먹방 보여주세요" },
    { name: "먹방최고", content: "여기 우리 동네다!" },
    { name: "PastaLover", content: "맛있어보여요~!" },
];

const LiveVideo = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            ...VideoOptions,
            title: props.route.params.title,
        });
    }, []);

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.video__wrapper}>
                {/* TODO video component: fetch from the server */}
                {/* FIXME IOS: not working, need to eject */}
                <VideoPlayer
                    videoProps={{
                        source: {
                            uri:
                                "https://kr.object.ncloudstorage.com/waggle-video/yogurt.mp4",
                        },
                        rate: 1.0,
                        volume: 1.0,
                        isMuted: false,
                        shouldPlay: true,
                        resizeMode: "cover", //contain
                        isLooping: false,
                        useNativeControls: false,
                    }}
                    hideControlsTimerDuration={10000000} //to be fixed
                    showControlsOnLoad={false}
                    inFullscreen={true}
                    width={windowWidth}
                    height={(windowHeight * 14) / 15} //to be fixed
                    videoBackground="grey"
                    disableSlider={true}
                    textStyle={{ color: "grey", fontSize: 0.01 }}
                />
                <View
                    style={{
                        height: "30%",
                        width: "100%",
                        backgroundColor: "transparent",
                        marginTop: -200,
                        // backgroundColor: "grey",
                        flex: 1,
                    }}
                >
                    <FlatList
                        style={styles.chat_wrapper}
                        key={"_"}
                        data={CHATS}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.chat_item_wrapper}>
                                    <Text style={styles.chat_item_name}>
                                        {item.name + ":" + " "}
                                    </Text>
                                    <Text style={styles.chat_item_content}>
                                        {item.content}
                                    </Text>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    ></FlatList>
                    <View style={styles.chat_input_wrapper}>
                        <TextInput
                            placeholder="채팅 입력하기"
                            style={styles.chat_input_text}
                            placeholderTextColor="grey"
                        ></TextInput>
                        <TouchableOpacity
                            onClick={() => {}}
                            style={styles.chat_input_button}
                        ></TouchableOpacity>
                    </View>
                </View>
            </View>
            <PickCouponButton></PickCouponButton>
        </View>
    );
};

const styles = StyleSheet.create({
    video__wrapper: {
        flex: 14,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: Color.warmgray,
        width: "100%",
    },
    chat_wrapper: {
        backgroundColor: "transparent",
        paddingHorizontal: 40,
    },
    chat_item_wrapper: {
        flexDirection: "row",
    },
    chat_item_name: {
        fontFamily: "noto_bold",
        color: "white",
    },
    chat_item_content: {
        fontFamily: "noto_regular",
        color: "white",
    },
    chat_input_wrapper: {
        backgroundColor: "rgba(255,255,255, 0.6)",
        borderRadius: 30,
        marginHorizontal: 25,
        marginVertical: 10,
        flexDirection: "row",
    },
    chat_input_text: {
        fontSize: font * 1.5,
        padding: 10,
        borderRadius: 30,
        color: Color.gray,
        width: "88%",
    },
    chat_input_button: {
        backgroundColor: Color.yellow,
        borderRadius: 30,
        width: 45,
        height: 45,
    },
});

export default LiveVideo;
