
import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import images from '@/constants/images';
import { router } from 'expo-router';

const Backbutton = ({tintColor}: {tintColor?: string}) => {
  return (
    <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className=""
          >
            <Image
              source={images.returnIcon}
              className="h-9 w-9 fixed"
              resizeMode="contain"
              tintColor={tintColor}
            />
          </TouchableOpacity>
    
  )
}

export default Backbutton