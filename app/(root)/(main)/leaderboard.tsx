import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  SafeAreaView, 
  StatusBar, 
  ScrollView, 
  TouchableOpacity,
  ActivityIndicator 
} from 'react-native';

interface UserProps {
    id: number;
    name: string;
    picture: string;
    score: number;
    position?: number;
}



const LeaderboardScreen = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.api.dev/api/?results=8');
      const data = await response.json();
      
      // Create our leaderboard data with random scores
      const leaderboardData = data.results.map((user: any, index: any) => {
        // Generate scores between 2 and 10
        const score = index === 0 ? 9 : 
                     index === 1 ? 8 : 
                     index === 2 ? 7 : 
                     10 - index < 2 ? 2 : 10 - index;
                     
        return {
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.large,
          score: score,
        };
      });
      
      // Sort by score (highest first)
      const sortedData = leaderboardData.sort((a: any, b: any) => b.score - a.score);
      
      // Ensure top 3 positions match the design
      if (sortedData.length >= 3) {
        sortedData[0].position = 1;
        sortedData[1].position = 2;
        sortedData[2].position = 3;
      }
      
      setUsers(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
      
      // Use mock data in case the API fails
      setUsers([
        { id: 1, name: 'David James', score: 9, position: 1, picture: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { id: 2, name: 'Michael Bryan', score: 7, position: 2, picture: 'https://randomuser.me/api/portraits/men/44.jpg' },
        { id: 3, name: 'John Deh', score: 8, position: 3, picture: 'https://randomuser.me/api/portraits/men/68.jpg' },
        { id: 4, name: 'Smith Carol', score: 6, picture: 'https://randomuser.me/api/portraits/men/76.jpg' },
        { id: 5, name: 'Harry Potter', score: 5, picture: 'https://randomuser.me/api/portraits/men/91.jpg' },
        { id: 6, name: 'John Santos', score: 4, picture: 'https://randomuser.me/api/portraits/men/12.jpg' },
        { id: 7, name: 'Ken Michael', score: 3, picture: 'https://randomuser.me/api/portraits/men/33.jpg' },
        { id: 8, name: 'Peter Johnson', score: 2, picture: 'https://randomuser.me/api/portraits/men/51.jpg' },
      ]);
    }
  };

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

  // Render loading indicator
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-red-500 justify-center items-center">
        <ActivityIndicator size="large" color="white" />
        <Text className="text-white mt-4 text-lg">Loading leaderboard...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="light-content" backgroundColor="#f44336" />
      
      {/* Top red section with podium */}
      <View className="bg-red-500 pt-4 pb-10 rounded-b-3xl">
        {/* Header with back button */}
        <View className="flex-row items-center justify-center relative px-4">
          <TouchableOpacity className="absolute left-4">
            <Text className="text-white text-3xl">↩</Text>
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">Leaderboard</Text>
        </View>
        
        {/* Podium section */}
        <View className="mt-8 flex-row justify-center items-end px-4 [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_95%,0%_80%)]">
          {topUsers.length >= 3 && (
            // 3rd place
            <View className="items-center mr-4">
              <View className="relative">
                <Image 
                  source={{ uri: topUsers[2].picture }} 
                  className="w-20 h-20 rounded-full border-2 border-teal-500"
                />
                <View className="absolute -bottom-1 right-0 bg-teal-500 w-6 h-6 rounded-full items-center justify-center">
                  <Text className="text-white font-bold">3</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">{topUsers[2].name}</Text>
              <Text className="text-white text-sm">{topUsers[2].score}/10</Text>
            </View>
          )}
          
          {topUsers.length >= 1 && (
            // 1st place
            <View className="items-center relative z-10">
              <Crown />
              <View className="relative">
                <Image 
                  source={{ uri: topUsers[0].picture }} 
                  className="w-28 h-28 rounded-full border-4 border-yellow-400"
                />
                <View className="absolute -bottom-1 right-0 bg-yellow-400 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-white font-bold">1</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">{topUsers[0].name}</Text>
              <Text className="text-white text-sm">{topUsers[0].score}/10</Text>
            </View>
          )}
          
          {topUsers.length >= 2 && (
            // 2nd place
            <View className="items-center ml-4">
              <View className="relative">
                <Image 
                  source={{ uri: topUsers[1].picture }} 
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
                <View className="absolute -bottom-1 right-0 bg-gray-200 w-6 h-6 rounded-full items-center justify-center">
                  <Text className="text-black font-bold">2</Text>
                </View>
              </View>
              <Text className="text-white font-semibold mt-2">{topUsers[1].name}</Text>
              <Text className="text-white text-sm">{topUsers[1].score}/10</Text>
            </View>
          )}
        </View>
      </View>
      
      {/* List of remaining users */}
      <ScrollView className="flex-1 pt-4 px-4">
        {remainingUsers.map((user, index) => (
          <View 
            key={user.id} 
            className="bg-white rounded-xl p-4 flex-row items-center justify-between mb-4 shadow-sm"
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