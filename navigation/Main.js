import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Posts } from "../screens/Posts.js";
import { Post } from "../screens/Post.js";
import CalendarScreen from "../screens/Calendar";
import Example from "../components/Example.js";

const MainStack = createStackNavigator();
export const Main = () => (
  <MainStack.Navigator>
    {/* <MainStack.Screen name="Calendar" component={CalendarScreen} /> */}
    <MainStack.Screen name="Example" component={Example} />

    <MainStack.Screen name="Home" component={Posts} />
    <MainStack.Screen name="Post" component={Post} />
  </MainStack.Navigator>
);
