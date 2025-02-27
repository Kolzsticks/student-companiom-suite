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
import { Link, router } from "expo-router";
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
            Create an account
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
              Phone
            </Text>
          </View>
          {/* Email Input */}
          <View className="relative">
            <TextInput className="border border-gray-500 rounded-[19px] h-[63px]" />
            <Text className="absolute top-[-12px] bg-gray-200 px-2 left-6 text-xl font-balloo2-medium">
              Password
            </Text>
          </View>

          {/* Password Input */}
          <View className="relative">
            <TextInput className="border border-gray-500 rounded-[19px] h-[63px]" />
            <Text className="absolute top-[-12px] bg-gray-200 px-2 left-6 text-xl font-balloo2-medium">
              Confirm Password
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Section */}

      <View className="flex flex-col items-center justify-center gap-2 mb-5">
        <Text className="text-xl font-inter-medium">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-inter-bold">
            Login
          </Link>
        </Text>

        <TouchableOpacity className="bg-red-600 p-5 rounded-[20px] flex items-center justify-center w-full">
          <Text className="text-white">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
