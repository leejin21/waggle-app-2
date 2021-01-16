// TODO: zIndex -> timestamp

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import VideoPlayer from "expo-video-player";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Color from "../../constants/Color";
import CommonStyles from "../../constants/CommonStyle";

import BottomButton from "../../components/BottomButton";
import Card from "../../components/Card";
import VideoOptions from "../../components/VideoOptions";
import PickCouponButton from "../../components/PickCouponButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const pad = windowHeight / 60; //10
const font = windowHeight / 65;

const timestamp = [
    { id: 0, name: "주변관경", milisec: 3000 },
    { id: 1, name: "인테리어", milisec: 8000 },
];
const TimeStamp = (props) => {
    const handleClick = () => {
        props.setPos(props.milisec);
    };

    return (
        <TouchableOpacity onPress={() => handleClick()}>
            <Card style={styles.timestamp}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign
                        name="caretright"
                        size={font * 2}
                        color={Color.gray}
                    ></AntDesign>
                    <Text> </Text>
                </View>
                <View>
                    <Text style={styles.timestamp_txt}>{props.name}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

// Page component
const YoutubeVideo = (props) => {
    props.navigation.setOptions({
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerStyle: {
            height: windowWidth * (5/16),
        },
        headerTitleStyle: {
            color: "black",
            fontSize: 30,
            fontFamily: "noto_bold"
        },
        title: props.route.params.title
    });

    /*useEffect(() => {
        props.navigation.setOptions({
            ...VideoOptions,
            title: props.route.params.title,
        });
    }, []);*/

    const [pos, setPos] = useState(0);

    const playIcon = () => {
        return <FontAwesome name="play" size={font * 5} color="white" />;
    };
    const pauseIcon = () => {
        return <FontAwesome name="pause" size={font * 5} color="white" />;
    };
    const replayIcon = () => {
        return <MaterialIcons name="replay" size={font * 5} color="white" />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.video__wrapper}>
                {/* TODO video component: fetch from the server */}
                {/* FIXME IOS: not working, need to eject */}
                <VideoPlayer
                    videoProps={{
                        source: {
                            uri:
                                "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                        },
                        rate: 1.0,
                        volume: 1.0,
                        isMuted: false,
                        shouldPlay: true,
                        resizeMode: "cover", //contain
                        isLooping: false,
                        positionMillis: pos,
                        useNativeControls: false,
                    }}
                    hideControlsTimerDuration={10000000} //to be fixed
                    inFullscreen={true}
                    width={windowWidth}
                    height={(windowHeight * 12) / 15.4} //to be fixed
                    //playIcon={playIcon}
                    //pauseIcon={pauseIcon}
                    //replayIcon={replayIcon}
                    videoBackground="grey"
                    //showControlsOnLoad={true}
                    sliderColor={Color.yellow}
                    showFullscreenButton={false}
                    textStyle={{ color: "grey", fontSize: 0.01 }}
                />
            </View>
            <View style={styles.timestamp__wrapper}>
                {timestamp.map((item) => {return <TimeStamp key={item.id} id={item.id} name={item.name} milisec={item.milisec} setPos={setPos}></TimeStamp>})}
            </View>
            <View style={styles.button__wrapper}>
                <BottomButton active={true} onPress={() => props.navigation.navigate("Basket", { title: props.route.params.title })}>
                    <Text style={{...CommonStyles.bold_text, color:"white"}}>픽하고 쿠폰받기</Text>
                </BottomButton>
            </View>
            <PickCouponButton></PickCouponButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    video__wrapper: {
        flex: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.warmgray,
        width: "100%",

        zIndex: 0
    },
    button__wrapper: {
        flex: 2,
        width: "100%",
    },
    header__right: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: pad * 0.5,
    },
    heart_icon: {
        margin: pad * 0.5,
    },
    more_icon: {
        margin: pad * 0.5,
        borderRadius: 15,
    },

    timestamp__wrapper: {
        flex: 1.4,
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",

        zIndex: 1,
        position: "absolute"
    },
    timestamp: {
        backgroundColor: Color.warmgray,
        borderRadius: pad * 1.7,
        margin: pad,
        marginRight: 0,
        padding: pad,
        paddingRight: pad * 1.5,
        flexDirection: "row",
        alignItems: "center",
    },
    timestamp_txt: {
        color: Color.gray,
        fontSize: font * 1.5,
        fontFamily: "noto_bold",
    },
});

export default YoutubeVideo;
