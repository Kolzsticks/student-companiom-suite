import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

// Define a type-safe interface for TabIconProps
interface TabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

// Reusable TabIcon Component
const TabIcon = ({ focused, icon, title }: TabIconProps) => (
  <View className="flex-1 flex flex-col items-center ">
    {/* Dynamically render the icon based on the library */}
    <icon.componentName
      name={icon.name}
      size={22}
      color={focused ? "#4338ca" : "#ccc"}
    />
    {/* Title Styling */}
    <Text
      className={`${
        focused
          ? "text-blue-500 font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-0.5`}
    >
      {title}
    </Text>
  </View>
);

// Main Tab Layout Component
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061ff",
          borderTopWidth: 1,
          minHeight: 60,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={{ componentName: Entypo, name: "home" }}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />

      {/* Savings Tab */}
      <Tabs.Screen
        name="savings"
        options={{
          title: "Savings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={{ componentName: MaterialIcons, name: "savings" }}
              focused={focused}
              title="Savings"
            />
          ),
        }}
      />

      {/* Quiz Tab */}
      <Tabs.Screen
        name="quiz-lobby"
        options={{
          title: "Quiz",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={{ componentName: MaterialIcons, name: "quiz" }}
              focused={focused}
              title="Quiz"
            />
          ),
        }}
      />

      {/* Leaderboard Tab */}
      <Tabs.Screen
        name="leader-board"
        options={{
          title: "Leaderboard",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={{ componentName: Entypo, name: "trophy" }}
              focused={focused}
              title="Leaderboard"
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={{ componentName: AntDesign, name: "user" }} // Changed 'profile' to 'user'
              focused={focused}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;