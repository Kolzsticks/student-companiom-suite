import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import images from "@/constants/images";
import Backbutton from "@/components/backbutton";

interface UserProps {
  id: number;
  name: string;
  picture: string;
  score: number;
  position?: number;
}

const LeaderboardScreen = () => {
  // Static data for quick prototyping
  const [users] = useState<UserProps[]>([
    {
      id: 1,
      name: "David James",
      score: 9,
      position: 1,
      picture: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Michael Bryan",
      score: 8,
      position: 2,
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "John Deh",
      score: 7,
      position: 3,
      picture: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      id: 4,
      name: "Smith Carol",
      score: 6,
      picture: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 5,
      name: "Harry Potter",
      score: 5,
      picture: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
      id: 6,
      name: "John Santos",
      score: 4,
      picture: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 7,
      name: "Ken Michael",
      score: 3,
      picture: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 8,
      name: "Peter Johnson",
      score: 2,
      picture: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 9,
      name: "Emma Watson",
      score: 10,
      picture: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 10,
      name: "Olivia Smith",
      score: 9,
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 11,
      name: "Ava Johnson",
      score: 8,
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 12,
      name: "Sophia Brown",
      score: 7,
      picture: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
      id: 13,
      name: "Isabella Davis",
      score: 6,
      picture: "https://randomuser.me/api/portraits/women/91.jpg",
    },
    {
      id: 14,
      name: "Mia Wilson",
      score: 5,
      picture: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 15,
      name: "Charlotte Moore",
      score: 4,
      picture: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ]);

  const [loading] = useState(false); // No loading needed for static data

  // Get top 3 users for the podium
  const topUsers = users.slice(0, 3);

  // Get remaining users for the list
  const remainingUsers = users.slice(3);

  // Render crown for the winner
  const Crown = () => (
    <View className="absolute -top-4 items-center w-full">
      <Text className="text-yellow-500 text-2xl">👑</Text>
    </View>
  );

  // Render loading indicator (not needed for static data, but kept for structure)
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-red-500 justify-center items-center">
        <ActivityIndicator size="large" color="white" />
        <Text className="text-white mt-4 text-lg">Loading leaderboard...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      className="flex-1 bg-transparent"
      style={{ backgroundColor: "transparent" }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#f44336" />

      {/* Top red section with podium */}
      <View
        className="absolute top-0 left-0 right-0 z-10"
        style={{ height: "45%" }}
      >
        {/* Background image with inward curve */}
        <View className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <Image
            source={images.rectangle2} // Replace with your image path
            className="w-full h-full opacity-100" // Ensure the image covers the entire area
            resizeMode="cover" // Use "cover" to fill the space
          />
        </View>

        <View className="pl-8 pt-8">
          <Backbutton tintColor="#fff" />
        </View>

        {/* Podium section */}
        <View className="mt-8 flex-row justify-center items-end px-4 relative z-10">
          {topUsers.length >= 3 && (
            // 3rd place
            <View className="items-center mr-4">
              <View className="relative">
                <Image
                  source={{ uri: topUsers[2].picture }}
                  className="w-20 h-20 rounded-full border-2 border-[#004643]"
                />
                <View className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#004643] w-6 h-6 rounded-full items-center justify-center">
                  <Text className="text-white font-bold">3</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">
                {topUsers[2].name}
              </Text>
              <Text className="text-white text-sm">{topUsers[2].score}/10</Text>
            </View>
          )}

          {topUsers.length >= 1 && (
            // 1st place
            <View className="items-center relative z-10 mb-4">
              <Crown />
              <View className="relative">
                <Image
                  source={{ uri: topUsers[0].picture }}
                  className="w-28 h-28 rounded-full border-2 border-yellow-400"
                />
                <View className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-white font-bold">1</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">
                {topUsers[0].name}
              </Text>
              <Text className="text-white text-sm">{topUsers[0].score}/10</Text>
            </View>
          )}

          {topUsers.length >= 2 && (
            // 2nd place
            <View className="items-center ml-4 ">
              <View className="relative">
                <Image
                  source={{ uri: topUsers[1].picture }}
                  className="w-20 h-20 rounded-full border-2 border-[#004643]"
                />
                <View className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#004643] w-6 h-6 rounded-full items-center justify-center">
                  <Text className="text-white font-bold">2</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">
                {topUsers[1].name}
              </Text>
              <Text className="text-white text-sm">{topUsers[1].score}/10</Text>
            </View>
          )}
        </View>
      </View>

      {/* List of remaining users */}
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingTop: "110%", paddingBottom: 20 }}
      >
        {remainingUsers.map((user, index) => (
          <View
            key={user.id}
            className="bg-white rounded-xl p-3 flex-row items-center justify-between mb-4 shadow-sm"
          >
            <View className="flex-row items-center">
              <Text className="font-bold text-lg mr-4">{index + 4}</Text>
              <Image
                source={{ uri: user.picture }}
                className="w-12 h-12 rounded-full mr-4"
              />
              <Text className="font-semibold text-lg">{user.name}</Text>
            </View>
            <Text className="font-medium">{user.score}/10</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
