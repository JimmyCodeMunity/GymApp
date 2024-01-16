import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { bodyParts } from '../constants/Index'
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'


export default function BodyParts() {
  const router = useRouter()
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-sembold text-neutral-700">Excercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}



const BodyPartCard = ({ item, index, router }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(5)}>
      <TouchableOpacity onPress={() => router.push({ pathname: '/excercises', params: item })} style={{ width: wp(44), height: wp(52) }}
        className="justify-end flex p-4 mb-4"
      >
        <Image source={item.image}
          resizeMode='cover'
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute rounded-[35px] bottom-0"
        />

        <Text
          style={{ fontSize: hp(2.4) }}
          className="font-semibold text-white text-center tracking-wide"
        >{item?.name}</Text>

      </TouchableOpacity>
    </Animated.View>
  )
}



const styles = StyleSheet.create({})