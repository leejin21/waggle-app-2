/*
    * EXPLANATION
    -App(Stack.Navigator)
     |_ Main(Tab.Navigator)
        |_ Youtube
        |_ Live
     |_ Settings
    -Auth
*/

// TODO: import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
/////////////////////////////////////////////////////////////////////////////////////
// * IMPORT SECTION
import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-community/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// import logo header
import MainNavOptions from "../components/MainNavOptions";

// import screens from each folders
// import CompleteRegisterScreen from "../screens/authScreens/CompleteRegisterScreen";
import LogoPage from "../pages/authPages/LogoPage";
import LoginPage from "../pages/authPages/LoginPage";

import YoutubeMain from "../pages/mainPages/YoutubeMain";
import YoutubeVideo from "../pages/mainPages/YoutubeVideo";
import LiveMain from "../pages/mainPages/LiveMain";
import LiveVideo from "../pages/mainPages/LiveVideo";

/////////////////////////////////////////////////////////////////////////////////////
//* INTIALIZATION SECTION

const windowHeight = Dimensions.get("window").height;
const font = windowHeight / 87;

const Auth = createStackNavigator();
// const App = createStackNavigator();
// const YoutubeStack = createStackNavigator();
const Main = createStackNavigator();
const Tab = createBottomTabNavigator();
/////////////////////////////////////////////////////////////////////////////////////
// * app stack section

const UpdateScreens = {
    // screens which will be used after jan.20th
    /*
    YoutubeUpdates: {
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
    },

    SettingUpdates: {
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
    },
    */
    /*
        // screens which should be go inside to AuthStack
            <Auth.Screen name="Register1" component={RegisterPage1} options={{ title: "약관동의", ...headerOptions }}></Auth.Screen>
            <Auth.Screen name="Register2" component={RegisterPage2} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Register3" component={RegisterPage3} options={{ headerShown: false }}></Auth.Screen>s
            <Auth.Screen name="MypageMain" component={MypageMain} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Mysetting" component={MysettingPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Information" component={InformationPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Coupon" component={CouponPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Review" component={ReviewPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Stamp1" component={StampPage1} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Stamp2" component={StampPage2} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Systemsetting" component={SystemsettingPage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Service" component={ServicePage} options={{ headerShown: false }}></Auth.Screen>
            <Auth.Screen name="Service2" component={ServicePage2} options={{ headerShown: false }}></Auth.Screen>
    */
};

// const SettingsScreen = {
//     // screens/settingsScreens 에 해당하는 설정 화면들
//     ...UpdateScreens.SettingUpdates,
// };

/////////////////////////////////////////////////////////////////////////////////////

// const AppStack = () => {
//     return (
//         <App.Navigator>
//             <App.Screen name="main" component={MainTab}></App.Screen>
//             {/* 일단 아래와 같이 SettingsScreen을 둠. */}
//             <App.Screen name="settings" component={SettingsScreen}></App.Screen>
//         </App.Navigator>
//     );
// };

const BottomTab = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        // logo header 설정해 주기
        navigation.setOptions(MainNavOptions);
    }, [navigation, route]);
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "red",
                inactiveTintColor: "grey",
                labelPosition: "beside-icon",
                adaptive: true,
            }}
        >
            <Tab.Screen
                name="YoutubeMain"
                component={YoutubeMain}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="ios-logo-youtube"
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarLabel: "유투브",
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="LiveMain"
                component={LiveMain}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="wifi" size={size} color={color} />
                    ),
                    tabBarLabel: "라이브",
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};

const MainStack = () => {
    return (
        <Main.Navigator>
            <Main.Screen name="BottomTab" component={BottomTab}></Main.Screen>
            <Main.Screen
                name="YoutubeVideo"
                component={YoutubeVideo}
            ></Main.Screen>
            <Main.Screen name="LiveVideo" component={LiveVideo}></Main.Screen>
        </Main.Navigator>
    );
};

const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName="Logo">
            <Auth.Screen name="Logo" component={LogoPage}></Auth.Screen>
            <Auth.Screen name="Login" component={LoginPage}></Auth.Screen>
        </Auth.Navigator>
    );
};

const waggleNavigator = () => {
    const isSignedIn = true;
    return (
        <NavigationContainer>
            {isSignedIn ? <MainStack></MainStack> : <AuthStack></AuthStack>}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default waggleNavigator;
// export default YoutubeMain;
