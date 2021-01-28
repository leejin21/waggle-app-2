import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Touchable,
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

function isInteger(str) {
    return !isNaN(str) && Number.isInteger(parseFloat(str));
}

const getTextLength = (str) => {
    let len = 0.0;
    for (let i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len = len + 2;
        } else if (isInteger(str.charAt(i))) {
            len = len + 1.3;
        } else {
            len = len + 0.5;
        }
    }
    return len;
};

const timestamp = [
    { id: 0, name: "주변관경", milisec: 5900 },
    { id: 1, name: "인테리어", milisec: 16000 },
    { id: 2, name: "메뉴", milisec: 40000 },
    { id: 3, name: "먹방", milisec: 90000 },
];
const TimeStamp = (props) => {
    const handleClick = () => {
        props.setPos(props.milisec);
    };

    return (
        <TouchableOpacity activeOpacity={0.43} onPress={() => handleClick()}>
            <Card style={styles.timestamp}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign
                        name="forward"
                        size={font * 1.7}
                        color={Color.gray}
                        style={styles.shadow__txt}
                    ></AntDesign>
                    <Text> </Text>
                </View>
                <View>
                    <Text
                        style={{
                            ...styles.timestamp_txt,
                            ...styles.shadow__txt,
                        }}
                    >
                        {props.name}
                    </Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

const Header = (props) => {
    const a = -13 * getTextLength(props.title);
    const text_margin_left = (a + 320) / 2;
    // 18.6: 35, 14: 70
    useEffect(() => {
        console.log(props.title);
        console.log(getTextLength(props.title));
        console.log(text_margin_left);
    });
    return (
        <TouchableOpacity style={styles.header} activeOpacity={1}>
            <Card
                style={{
                    borderRadius: pad * 2,
                    backgroundColor: Color.warmgray,
                    opacity: 0.75,
                }}
            >
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <AntDesign
                        name="left"
                        size={font * 1.9}
                        color="white"
                        style={styles.header__left}
                    ></AntDesign>
                </TouchableOpacity>
                <View>
                    <Text
                        style={{
                            ...styles.header__txt,
                            marginLeft: text_margin_left,
                        }}
                    >
                        {props.title}
                    </Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

// Page component
const YoutubeVideo = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerStyle: {
                height: 0,
            },
            headerLeft: () => {
                null;
            },
        });
    }, []);

    const [pos, setPos] = useState(0);

    return (
        <>
            <Header
                title={props.route.params.title}
                navigation={props.navigation}
            ></Header>
            <View style={styles.container}>
                <VideoPlayer
                    videoProps={{
                        source: {
                            uri: props.route.params.uri_video,
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
                    height={(windowHeight * 9.2) / 11.5} //to be fixed
                    //playIcon={playIcon}
                    //pauseIcon={pauseIcon}
                    //replayIcon={replayIcon}
                    videoBackground="transparent"
                    //showControlsOnLoad={true}
                    sliderColor={Color.yellow}
                    showFullscreenButton={false}
                    textStyle={{ color: "grey", fontSize: 0.01 }}
                />
                <View style={styles.timestamp__wrapper}>
                    {timestamp.map((item) => {
                        return (
                            <TimeStamp
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                milisec={item.milisec}
                                setPos={setPos}
                            ></TimeStamp>
                        );
                    })}
                </View>
                <View style={styles.bottombutton__wrapper}>
                    <PickCouponButton></PickCouponButton>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        position: "absolute",
        height: windowHeight / 10,
        width: (windowWidth * 9.9) / 10,

        right: (windowWidth * 0.05) / 10,
        bottom: windowHeight * 0.86,
    },
    header__left: {
        // position: "absolute",
        // left: -13,
        // top: -5,
        marginTop: -7,
        marginStart: -20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2,

        elevation: 5,
    },
    header__txt: {
        fontFamily: "noto_bold",
        fontSize: 29,
        marginTop: -30,
        marginLeft: 20,

        // position: "absolute",
        // left: 75,
        // top: -14,
    },

    container: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    timestamp__wrapper: {
        backgroundColor: Color.warmgray,
        width: "100%",
        height: (windowHeight * 1.1) / 11.5,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",

        shadowColor: Color.warmgray,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 1,
        shadowRadius: 5,

        elevation: 0,

        //zIndex: 1,
        //position: "absolute"
    },
    timestamp: {
        backgroundColor: Color.warmgray,
        borderRadius: pad * 1.5,
        margin: pad,
        marginRight: 0,
        padding: pad,
        paddingRight: pad * 1.3,
        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,

        elevation: 5,
    },
    timestamp_txt: {
        color: Color.gray,
        fontSize: font * 1.5,
        fontFamily: "noto_regular",
        paddingBottom: pad * 2.2,
    },

    bottombutton__wrapper: {
        width: windowWidth,
        height: (windowHeight * 1.2) / 11.5,
    },

    shadow__txt: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.2,

        elevation: 5,
    },
});

export default YoutubeVideo;
