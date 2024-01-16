import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExcerciseByBodyPart } from '../api/ExcerciseDB';
import { exampleExcercise } from '../constants/Index';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Excercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [excercises, setExcercises] = useState([])
  // console.log('got item: ',item)

  useEffect(() => {
    if (item) {
      getExcercises(item.name)
    }

  }, [item])


  const getExcercises = async (bodyPart) => {
    let data = await fetchExcerciseByBodyPart(bodyPart)
    // console.log('got data:',data)
    setExcercises(data);

  }
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />


      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 justify-center mx-4 pr-1 items-center rounded-full absolute"
        style={{ marginTop: hp(7), width: hp(5.5), height: hp(5.5) }}
      >

        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>


      {/* excercises */}
      <View className="mt-4 space-y-3 mx-4">
        <Text className="text-neutral-700 font-semibold">
          {item.name} excercises
        </Text>


        <View className="mb-10">
          <ExerciseList data={excercises}/>
        </View>
      </View>

    </ScrollView>
  )
}