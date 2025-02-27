import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CircularProgress = ({ size, strokeWidth, percentage }: {size: any, strokeWidth: any, percentage: any}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={{ width: size, height: size, position: 'relative' }}>
      {/* Background Circle */}
      <View
        className="absolute"
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: '#c6e2dc',
        }}
      />
      
      {/* Progress Circle */}
      <View
        className="absolute"
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: '#ff5757',
          borderTopColor: 'transparent',
          borderRightColor: '#ff5757',
          borderBottomColor: '#ff5757',
          borderLeftColor: '#ff5757',
          transform: [
            { rotate: '0deg' },
            { rotateZ: `-${percentage}deg` }
          ]
        }}
      />
      
      {/* Center Text */}
      <View className="absolute justify-center items-center" style={{ width: size, height: size }}>
        <Text className="text-3xl font-bold text-[#1e3a29]">30</Text>
      </View>
    </View>
  );
};

const QuizLobby = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('1994');
  
  const options = [
    { id: '1986', text: '1986' },
    { id: '1994', text: '1994' },
    { id: '2002', text: '2002' },
    { id: '2010', text: '2010' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f3f4f6] p-6">
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text className="text-xl font-semibold text-center flex-1">Quiz Lobby</Text>
        <View className="w-6" />
      </View>
      
      {/* Timer */}
      <View className="items-center mb-8">
        <CircularProgress size={100} strokeWidth={10} percentage={30} />
      </View>
      
      {/* Question Card */}
      <View className="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <Text className="text-2xl font-bold text-[#111827]">
          In what year did the United States host the FIFA World Cup for the first time?
        </Text>
      </View>
      
      {/* Answer Options */}
      <View className="mb-8">
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            className={`bg-white rounded-xl p-5 mb-4 flex-row justify-between items-center border ${
              selectedAnswer === option.id ? 'bg-[#fecaca] border-[#fca5a5]' : 'border-[#e5e7eb]'
            }`}
            onPress={() => setSelectedAnswer(option.id)}
          >
            <Text className={`text-xl font-semibold ${
              selectedAnswer === option.id ? 'text-[#dc2626]' : 'text-[#111827]'
            }`}>
              {option.text}
            </Text>
            <View className={`w-5 h-5 rounded-full border-2 justify-center items-center ${
              selectedAnswer === option.id ? 'border-[#dc2626]' : 'border-[#d1d5db]'
            }`}>
              {selectedAnswer === option.id && <View className="w-2.5 h-2.5 rounded-full bg-[#dc2626]" />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Next Button */}
      <TouchableOpacity className="bg-[#ef4444] rounded-xl p-4 items-center mt-auto">
        <Text className="text-xl font-semibold text-white">Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizLobby;