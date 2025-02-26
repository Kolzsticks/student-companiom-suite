import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-gray-100">
      <View className="flex-1 p-5" style={{ gap: 50 }}>
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <View>
            <Text className="text-xl font-bold">Hi, Brandon</Text>
            <Text className="text-gray-600">
              Let's make this day productive
            </Text>
          </View>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            className="w-12 h-12 rounded-full"
          />
        </View>

        {/* Wallet & Ranking */}
        <View
          className="flex-row bg-red-600 p-5 rounded-lg justify-between items-center mb-5"
          style={{ gap: 20 }}
        >
          <View className="items-center">
            <Text className="text-white font-bold">Wallet</Text>
            <Text className="text-white text-xl font-bold">$200.99</Text>
          </View>
          <View className="w-px h-full bg-white" />
          <View className="items-center">
            <Text className="text-white font-bold underline">Ranking</Text>
            <Text className="text-white text-lg font-bold">34 points</Text>
          </View>
        </View>

        {/* Feature Grid */}
        <View className="flex-row flex-wrap  justify-between">
          <FeatureCard title="Quiz Lobby" image={images.QuizLobby} />
          <FeatureCard title="Live Quiz" image={images.livequiz} />
          <FeatureCard title="Leaderboard" image={images.leaderboard} />
          <FeatureCard title="Reminders" image={images.ClassReminder} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// Feature Card Component
const FeatureCard = ({ title, image }: { title: string; image: any }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/sign-in");
      }}
      className="w-[48%] bg-red-600 p-5 rounded-lg items-center mb-4"
    >
      <Image source={image} className="w-12 h-12 mb-2" />
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Home;
