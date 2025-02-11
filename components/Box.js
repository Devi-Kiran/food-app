import react, { useState } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";

export default function Box() {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsActive(prev => !prev)}
      className={`${
        isActive ? "bg-red-500" : "bg-blue-900"
      } w-[100px] h-[100px] flex items-center justify-center rounded-full`}
    >
      <Text className="text-white text-2xl font-bold capitalize">click</Text>
    </TouchableOpacity>
  );
}
