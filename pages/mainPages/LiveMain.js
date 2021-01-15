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
import CommonStyles from "../../constants/CommonStyle";

import Subheader from "../../components/SubHeader";
import ListPhoto from "../../components/ListPhoto";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SECTIONS = [
    {
        smallTxt: "지금 바로 생생하게!",
        hashTxt: "라이브 온",
        data: [
            {
                photo: require("../../assets/images/rosepasta.png"),
                name: "로제 파스타 맛집[로파]",
            },
        ],
    },
];

const header = ({ section: { smallTxt, hashTxt } }) => {
    return <Subheader smallTxt={smallTxt} hashTxt={hashTxt}></Subheader>;
};

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
    useEffect(() => {
        props.navigation.setOptions(MainNavOptions);
    }, []);

    return (
        <SectionList
            style={{ flex: 1 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={header}
            renderItem={({ item, section }) => {
                return (
                    <FlatList
                        style={{ padding: 15 }}
                        horizontal
                        data={section.data}
                        renderItem={({ item }) => (
                            <ListPhoto
                                ITEM_WIDTH={windowWidth / 1.3}
                                // style={{ margin: 30}}
                                item={item.photo}
                                navigation={props.navigation}
                                rest_name={item.name}
                                png={true}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    ></FlatList>
                );
            }}
            renderSectionFooter={footer}
        ></SectionList>
    );
};

const styles = StyleSheet.create({});

export default LiveMain;
