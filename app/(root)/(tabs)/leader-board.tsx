import { View, Text, ScrollView } from "react-native";
import React from "react";

const LeaderBoard = () => {
  const users = [
    { name: "Alice", score: 2500, rank: 1 },
    { name: "Bob", score: 2000, rank: 2 },
    { name: "Charlie", score: 1800, rank: 3 },
    { name: "David", score: 1500, rank: 4 },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-6">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-6">Leaderboard</Text>

      {/* List of Users */}
      {users.map((user, index) => (
        <View
          key={index}
          className="flex-row items-center justify-between p-4 mb-4 bg-gray-50 rounded-lg"
        >
          <View className="flex-row items-center">
            <Text className="text-lg text-gray-700 mr-4">#{user.rank}</Text>
            <Text className="text-lg text-gray-700">{user.name}</Text>
          </View>
          <Text className="text-lg text-gray-700">{user.score} pts</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LeaderBoard;