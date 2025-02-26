import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import { router } from "expo-router";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />

      {/* Main Container */}
      <View className="flex-1 justify-between px-6 py-10">
        {/* Top Section with Logo */}
        <View className="items-center justify-center flex-1">
          {/* Logo Container */}
          <View className="items-center">
            {/* Quiz Icon Image */}
            <Image
              source={images.appicon}
              className="w-72 h-52"
              resizeMode="contain"
            />

            {/* Quizzy Text */}
            <Text className="text-red-500 text-6xl font-bold mt-10">
              EduQuest
            </Text>
          </View>
        </View>

        {/* Button Section */}
        <View className="flex flex-col gap-10 mt-10 space-y-4">
          {/* Register Button */}
          <TouchableOpacity
           onPress={() => {
            router.push("/leaderboard");
          }}
          className="bg-red-500 rounded-full py-5 items-center">
            <Text className="text-white text-2xl font-bold">Register</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={() => {
              router.push("/sign-in");
            }}
            className="border-2 border-black rounded-full py-5 items-center"
          >
            <Text className="text-black text-2xl font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
