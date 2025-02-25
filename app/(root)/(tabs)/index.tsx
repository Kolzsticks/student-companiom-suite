import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

// Dummy data
const userName = 'John Doe';
const dailyQuote = '"The beautiful thing about learning is that no one can take it away from you." – B.B. King';
const upcomingClass = { title: 'Mathematics 101', time: 'Today at 3:00 PM', instructor: 'Prof. Sarah Wilson' };
const recentQuizzes = [
  { id: '1', title: 'Math Quiz', participants: 120, score: '90%', image: 'math-quiz' },
  { id: '2', title: 'History Quiz', participants: 85, score: '85%', image: 'history-quiz' },
  { id: '3', title: 'Science Quiz', participants: 152, score: '78%', image: 'science-quiz' },
];
const savingsBalance = '$150.00';
const savingsGoal = '$300.00';
const savingsProgress = 50; // percentage
const socialFeed = [
  { id: '1', name: 'Jane Smith', action: 'aced the Science Quiz!', time: '2h ago', avatar: 'jane' },
  { id: '2', name: 'Mike Johnson', action: 'joined your study group', time: '4h ago', avatar: 'mike' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView className="flex-1 h-full mb-16" showsVerticalScrollIndicator={false}>
      

        {/* Main Content */}
        <View className="px-5 py-6">
          {/* Upcoming Class Card */}
          <View className="bg-white rounded-2xl p-5 mb-6 shadow-md">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-800">Upcoming Class</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            
            <View className="flex-row items-center">
              <View className="bg-indigo-100 p-3 rounded-xl mr-4">
                <Ionicons name="school" size={28} color="#4f46e5" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">{upcomingClass.title}</Text>
                <Text className="text-sm text-gray-600 mt-1">Instructor: {upcomingClass.instructor}</Text>
                <View className="flex-row items-center mt-2">
                  <Ionicons name="time-outline" size={14} color="#4f46e5" />
                  <Text className="text-sm text-indigo-600 ml-1 font-medium">{upcomingClass.time}</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-indigo-600 px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Join</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Quizzes Section */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-800">Recent Quizzes</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600 font-semibold">See All</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              className="pb-2"
            >
              {recentQuizzes.map((quiz) => (
                <TouchableOpacity 
                  key={quiz.id} 
                  className="w-44 bg-white rounded-2xl mr-4 overflow-hidden shadow-sm"
                >
                  <View className="h-24 bg-gray-200 relative">
                    {/* This would be a real image in production */}
                    <View className="absolute bottom-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                      <Text className="font-bold text-indigo-600">{quiz.score}</Text>
                    </View>
                  </View>
                  <View className="p-3">
                    <Text className="text-base font-semibold text-gray-800">{quiz.title}</Text>
                    <View className="flex-row items-center mt-2">
                      <Ionicons name="people-outline" size={14} color="#6b7280" />
                      <Text className="text-xs text-gray-600 ml-1">{quiz.participants} participants</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Savings Overview Section */}
          <View className="bg-white rounded-2xl p-5 mb-6 shadow-md">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-800">Savings Overview</Text>
              <TouchableOpacity>
                <Ionicons name="stats-chart" size={20} color="#4f46e5" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-sm text-gray-600">Current Balance</Text>
                <Text className="text-xl font-bold text-indigo-600 mt-1">{savingsBalance}</Text>
              </View>
              <View>
                <Text className="text-sm text-gray-600 text-right">Savings Goal</Text>
                <Text className="text-xl font-bold text-gray-800 mt-1">{savingsGoal}</Text>
              </View>
            </View>
            
            {/* Progress Bar */}
            <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className={`h-full bg-indigo-600 rounded-full`}
                style={{ width: `${savingsProgress}%` }} 
              />
            </View>
            <Text className="text-right text-xs text-gray-600 mt-1">{savingsProgress}% of goal reached</Text>
          </View>

          {/* Quick Actions Section */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Quick Actions</Text>
            <View className="flex-row justify-between">
              <TouchableOpacity className="flex-1 items-center bg-white py-4 rounded-xl mr-2 shadow-sm">
                <View className="bg-indigo-100 p-3 rounded-lg mb-2">
                  <Ionicons name="create-outline" size={20} color="#4f46e5" />
                </View>
                <Text className="text-sm font-semibold text-gray-800">New Quiz</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {router.push('/leader-board')}} className="flex-1 items-center bg-white py-4 rounded-xl mx-2 shadow-sm">
                <View className="bg-indigo-100 p-3 rounded-lg mb-2">
                  <Ionicons name="trophy-outline" size={20} color="#4f46e5" />
                </View>
                <Text className="text-sm font-semibold text-gray-800">Leaderboard</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {router.push('/savings')}} className="flex-1 items-center bg-white py-4 rounded-xl ml-2 shadow-sm">
                <View className="bg-indigo-100 p-3 rounded-lg mb-2">
                  <Ionicons name="wallet-outline" size={20} color="#4f46e5" />
                </View>
                <Text className="text-sm font-semibold text-gray-800">Savings</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Social Feed Section */}
          <View>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-800">Social Feed</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            
            {socialFeed.map((item) => (
              <View 
                key={item.id} 
                className="bg-white rounded-xl p-4 mb-3 flex-row shadow-sm"
              >
                <View className="h-12 w-12 rounded-full bg-indigo-200 mr-3 overflow-hidden">
                  {/* This would be a real avatar image in production */}
                  <View className="h-full w-full bg-indigo-400 opacity-50" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between">
                    <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
                    <Text className="text-xs text-gray-500">{item.time}</Text>
                  </View>
                  <Text className="text-sm text-gray-600 mt-1">{item.action}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;