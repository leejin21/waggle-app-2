//TODO: import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import screens from each folders
// import CompleteRegisterScreen from "../screens/authScreens/CompleteRegisterScreen";
import LogoPage from "../pages/authPages/LogoPage";
import LoginPage from "../pages/authPages/LoginPage";

import YoutubeMain from "../pages/mainPages/YoutubeMain";
import YoutubeVideo from "../pages/mainPages/YoutubeVideo";
import LiveMain from "../pages/mainPages/LiveMain";
import LiveVideo from "../pages/mainPages/LiveVideo";

import Color from "../constants/Color";
import AsyncStorage from "@react-native-community/async-storage";

const windowHeight = Dimensions.get("window").height;
const font = windowHeight / 87;

const AuthContext = React.createContext();

const Auth = createStackNavigator();
const Main = createStackNavigator();

const SettingsScreen = {
    // screens/settingsScreens 에 해당하는 설정 화면들
    Logo: {
        component: LogoPage,
        options: { headerTintColor: "transparent" },
    },
    Login: {
        component: LoginPage,
        options: { headerTintColor: "transparent" },
    },
/*
    Register1: {
        component: RegisterPage1,
        options: { title: "정보수정" },
    },
    Register2: {
        component: RegisterPage2,
        options: { title: "정보수정" },
    },
    Register3: {
        component: RegisterPage3,
        options: { title: "정보수정" },
    },

    MypageMain: {
        component: MypageMain,
        options: { title: "정보수정" },
    },
    Mysetting: {
        component: MysettingPage,
        options: { title: "정보수정" },
    },
    Information: {
        component: InformationPage,
        options: { title: "정보수정" },
    },
    Coupon: {
        component: CouponPage,
        options: { title: "정보수정" },
    },
    Review: {
        component: ReviewPage,
        options: { title: "정보수정" },
    },
    Stamp1: {
        component: StampPage1,
        options: { title: "정보수정" },
    },
    Stamp2: {
        component: StampPage2,
        options: { title: "정보수정" },
    },
    Systemsetting: {
        component: SystemsettingPage,
        options: { title: "정보수정" },
    },
    Service: {
        component: ServicePage,
        options: { title: "정보수정" },
    },
    Service2: {
        component: ServicePage2,
        options: { title: "정보수정" },
    },
    */
};

const MainScreen = {
    // screens/mainScreens 에 해당하는 메인 화면들
    YoutubeMain: {
        component: YoutubeMain,
        options: {
            headerBackTitleVisible: false,
            headerTitle: (props) => <Image style={{ width: 160, height: 80 }} /*source={require("../assets/images/logo.png")}*/ resizeMode="contain"></Image>,
            headerTitleStyle: {
                flex: 1,
                textAlign: "center",
            },
            /*
            headerStyle: {
                backgroundColor: "black",
                height: 150,
                // 밑에 줄 그인 거 없애기 위함
                shadowColor: "transparent",
                backgroundColor: "grey",
            },*/
        },
    },
    YoutubeVideo: {
        component: YoutubeVideo,
        options: {},
    },
    /*
    YoutubeFood1: {
        component: YoutubeFood1,
        options: {},
    },
    YoutubeFood2: {
        component: YoutubeFood2,
        options: {},
    },
    YoutubeFood3: {
        component: YoutubeFood3,
        options: {},
    },
*/
    LiveMain: {
        component: LiveMain,
        options: {},
    },
    LiveVideo: {
        component: LiveVideo,
        options: {},
    },
};

const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName="Logo">
            <Auth.Screen name="Logo" component={LogoPage}></Auth.Screen>
            <Auth.Screen name="Login" component={LoginPage}></Auth.Screen>
            {/*<Auth.Screen name="Register1" component={RegisterPage1} options={{ title: "약관동의", ...headerOptions }}></Auth.Screen>
            <Auth.Screen name="Register2" component={RegisterPage2} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Register3" component={RegisterPage3} options={{ headerShown: false }}></Auth.Screen>
            
            <Auth.Screen name="MypageMain" component={MypageMain} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Mysetting" component={MysettingPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Information" component={InformationPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Coupon" component={CouponPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Review" component={ReviewPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Stamp1" component={StampPage1} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Stamp2" component={StampPge2} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Systemsetting" component={SystemsettingPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Service" component={ServicePage} options={{ headerShown: false }}></Auth.Screen>
    <Auth.Screen name="Service2" component={ServicePage2} options={{ headerShown: false }}></Auth.Screen>*/}
        </Auth.Navigator>
    );
};

const MainStack = () => {
    return (
        <Main.Navigator initialRouteName="YoutubeMain">
            {Object.entries({ ...MainScreen, ...SettingsScreen }).map(([name, others]) => (
                <Main.Screen key={name} name={name} component={others.component} options={others.options} />
            ))}
        </Main.Navigator>
    );
};

const waggleNavigator = () => {
    // Main or Auth
    // |_ Settings

    const isSignedIn = true;
    return <NavigationContainer>{isSignedIn ? <MainStack></MainStack> : <AuthStack></AuthStack>}</NavigationContainer>;
};

const styles = StyleSheet.create({});

export default waggleNavigator;
//export { AuthContext };