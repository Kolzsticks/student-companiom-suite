import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { router } from "expo-router";
import Backbutton from "@/components/backbutton";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200 h-full p-8">
      {/* Top Section */}
      <Backbutton />
      {/* Middle Section */}
      <KeyboardAvoidingView
        behavior="padding" // Adjust behavior based on platform
        className="flex-1"
      >
        <View className="flex flex-col items-center gap-1 mt-10">
          <Text className="font-balloo2-bold text-2xl text-gray-800 text-center">
            Login to your account
          </Text>
          <Text className="font-balloo2-medium text-lg">
            Please Fill in your personal information
          </Text>
        </View>

        <View className="flex flex-col mt-16 gap-5">
          {/* Email Input */}
          <View className="relative">
            <TextInput className="border border-gray-500 rounded-[19px] h-[63px]" />
            <Text className="absolute top-[-12px] bg-gray-200 px-2 left-6 text-xl font-balloo2-medium">
              Email
            </Text>
          </View>

          {/* Password Input */}
          <View className="relative">
            <TextInput className="border border-gray-500 rounded-[19px] h-[63px]" />
            <Text className="absolute top-[-12px] bg-gray-200 px-2 left-6 text-xl font-balloo2-medium">
              Password
            </Text>
          </View>

          {/* Forgot Password Text */}
          <View className="flex flex-row justify-end">
            <Text className="underline text-xl font-balloo2-medium">
              Forgot Password?
            </Text>
          </View>

          {/* Divider with "or" */}
          <View className="relative flex items-center justify-center mb-8">
            <View className="w-full h-[0.5px] bg-black"></View>
            <Text className="font-inter-regular text-xl absolute top-[-15px] bg-gray-200 p-1">
              or
            </Text>
          </View>

          <View className="flex flex-row">
  {/* Google Button */}
  <View className="flex flex-row items-center gap-2 border border-gray-600 rounded-[10px] p-3 flex-1 mr-2 overflow-visible" style={{ borderRadius: 10 }}>
    <Image
      source={images.google}
      resizeMode="contain"
      className="h-9 w-9"
    />
    <Text className="font-balloo2-medium">Google</Text>
  </View>

  {/* Facebook Button */}
  <View className="flex flex-row items-center gap-2 border border-gray-600 rounded-[10px] p-3 flex-1 ml-2 overflow-visible" style={{ borderRadius: 10 }}>
    <Image
      source={images.facebook}
      resizeMode="contain"
      className="h-9 w-9"
    />
    <Text className="font-balloo2-medium">Facebook</Text>
  </View>
</View>
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Section */}

      <View className="flex flex-col items-center justify-center gap-2 mb-5">
        <Text className="text-xl font-inter-medium">
          Don't have an account?{" "}
          <Text className="font-inter-bold">Register</Text>
        </Text>

        <TouchableOpacity className="bg-red-600 p-5 rounded-[20px] flex items-center justify-center w-full">
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
