import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <ScrollView className="flex-1 bg-white p-6">
      {/* Profile Picture and Name */}
      <View className="items-center">
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
          }}
          className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
        />
        <Text className="text-2xl font-bold text-gray-800">John Doe</Text>
        <Text className="text-lg text-gray-600">@johndoe</Text>
      </View>

      {/* Stats */}
      <View className="mt-8 space-y-4">
        <View className="bg-blue-50 p-4 rounded-lg">
          <Text className="text-lg text-gray-700">Points: 1,234</Text>
          <Text className="text-lg text-gray-700">Level: 5</Text>
        </View>

        {/* Progress Bar */}
        <View className="mt-4">
          <Text className="text-lg text-gray-700 mb-2">Progress to Next Level</Text>
          <View className="w-full h-2 bg-gray-200 rounded-full">
            <View className="w-3/4 h-2 bg-blue-500 rounded-full" />
          </View>
        </View>

        {/* Achievements */}
        <View className="mt-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Achievements</Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] bg-green-50 p-4 rounded-lg mb-4">
              <Text className="text-lg text-gray-700">🎖️ Top 10%</Text>
            </View>
            <View className="w-[48%] bg-yellow-50 p-4 rounded-lg mb-4">
              <Text className="text-lg text-gray-700">🏅 Quiz Master</Text>
            </View>
            <View className="w-[48%] bg-purple-50 p-4 rounded-lg">
              <Text className="text-lg text-gray-700">📚 Lifelong Learner</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;