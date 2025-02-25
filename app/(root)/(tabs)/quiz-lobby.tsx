import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";

const QuizLobby = () => {
  const quizzes = [
    { title: "Math Quiz", participants: 120, category: "Math" },
    { title: "History Quiz", participants: 85, category: "History" },
    { title: "Science Quiz", participants: 92, category: "Science" },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-6">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-6">Quiz Lobby</Text>

      {/* Search Bar */}
      <TextInput
        placeholder="Search quizzes..."
        className="bg-gray-100 p-4 rounded-lg mb-6"
      />

      {/* Quiz Categories */}
      <View className="flex-row space-x-4 mb-6">
        <Text className="text-lg text-blue-500 font-medium">Math</Text>
        <Text className="text-lg text-gray-600">History</Text>
        <Text className="text-lg text-gray-600">Science</Text>
      </View>

      {/* List of Quizzes */}
      {quizzes.map((quiz, index) => (
        <View
          key={index}
          className="flex-row items-center justify-between p-4 mb-4 bg-gray-50 rounded-lg"
        >
          <View>
            <Text className="text-lg text-gray-700">{quiz.title}</Text>
            <Text className="text-sm text-gray-500">{quiz.category}</Text>
          </View>
          <Text className="text-lg text-gray-600">{quiz.participants} participants</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default QuizLobby;