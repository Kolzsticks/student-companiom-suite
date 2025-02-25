import { View, Text, ScrollView } from "react-native";
import React from "react";

const Savings = () => {
  const transactions = [
    { id: 1, description: "Monthly Deposit", amount: "$200" },
    { id: 2, description: "Interest Earned", amount: "$5" },
    { id: 3, description: "Withdrawal", amount: "-$50" },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-6">
      {/* Title */}
      <Text className="text-2xl font-bold text-gray-800 mb-6">Savings</Text>

      {/* Savings Summary */}
      <View className="bg-blue-50 p-6 rounded-lg mb-6">
        <Text className="text-lg text-gray-700">Total Savings: $1,234.56</Text>
        <Text className="text-lg text-gray-700 mt-2">Monthly Goal: $500</Text>
        <View className="mt-4">
          <Text className="text-lg text-gray-700 mb-2">Progress: 75%</Text>
          <View className="w-full h-2 bg-gray-200 rounded-full">
            <View className="w-3/4 h-2 bg-blue-500 rounded-full" />
          </View>
        </View>
      </View>

      {/* Recent Transactions */}
      <View>
        <Text className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</Text>
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            className="flex-row items-center justify-between p-4 mb-4 bg-gray-50 rounded-lg"
          >
            <Text className="text-lg text-gray-700">{transaction.description}</Text>
            <Text className="text-lg text-gray-700">{transaction.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Savings;