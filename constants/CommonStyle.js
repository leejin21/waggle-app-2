import { StyleSheet, Dimensions } from "react-native";

import Colors from "./Color";

// dimensions.windowHeight, dimensions.windowWidth  
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const pad = windowHeight / 60; 

/* 
const windowHeight = Dimensions.get("window").height;
const pad = windowHeight / 80;
const font = windowHeight / 87;
*/

const DIAMETER = windowHeight / 14 ;

const CommonStyles = StyleSheet.create({
    bold_text: {
        textAlign: "center",
        fontFamily: "noto_bold",
        color: "black",
        fontSize: windowHeight / 28, //30
    },
    small_text: {
        textAlign: "center",
        fontFamily: "noto_regular",
        color: "white",
        fontSize: windowHeight / 56,
    },
    /* 안쓰이는 것 같은데?
    bottom_button: {
        backgroundColor: Colors.deep_yellow,
        padding: 40,
        paddingBottom: 45,
        width: "100%",
        // fontFamily: "noto_bold",
    },
    */
    grey_button: {
        backgroundColor: Colors.mid_grey,
        fontSize: windowHeight / 42,
        height: windowWidth * 0.144,
        aspectRatio: 5 / 1,
        padding: pad,
        borderRadius: pad*3,
        color: "white",
    },
    yellow_circle: {
        // padding, height, width, borderRadius는 따로 지정을 해줘야 편함
        height: DIAMETER,
        width: DIAMETER,
        borderRadius: DIAMETER * 2,
        backgroundColor: Colors.deep_yellow,
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        paddingTop: pad,
        backgroundColor: Colors.body_grey,
        flex: 1,
    },
    body__middle: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    body__end: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default CommonStyles;