import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{FadeIn,FadeInDown,FadeOut} from 'react-native-reanimated'
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter()
  return (
    <View className="flex-1 justify-end items-center flex">
      <StatusBar style="light" />
      <Image className="absolute h-full w-full" source={require('../assets/images/welcome.png')} />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center">
          <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
            For you
          </Text>
        </Animated.View>


        <View>
          <TouchableOpacity onPress={()=>router.push('home')} className="bg-rose-500 items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          style={{height:hp(7),width:wp(80)}}
          >
          <Text className="text-white font-bold tracking-widest">Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})