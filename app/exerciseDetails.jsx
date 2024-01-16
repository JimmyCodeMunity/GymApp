import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Anticons from 'react-native-vector-icons/AntDesign'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'


export default function ExerciseDetails() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log('got item: ', item)
    return (
        <View className="flex flex-1">
            <View className="shadow-md bg-neutral-200 rounded-[40px]">
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit="cover"
                    style={{ width: wp(100), height: wp(100) }}
                    className="rounded-b-[40px]"
                />
            </View>
            <TouchableOpacity
                onPress={() => router.back()}
                className="justify-center mx-2 rounded-full right-0 absolute"
                style={{ marginTop: hp(7), width: hp(5.5), height: hp(5.5) }}
            >

                <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>


            {/* details */}
            <ScrollView className="mx-4 space-y-3 mt-3"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
            >
                <Animated.Text
                    entering={FadeInDown.delay(100).duration(300).springify()}
                    style={{ fontSize: hp(3.5) }}
                    className="text-neutral-700 tracking-wide font-semibold">
                    {item.name}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(200).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide font-semibold">
                    Equipment <Text className="font-bold text-neutral-800">{item.equipment}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide font-semibold">
                    Secondary Muscles <Text className="font-bold text-neutral-800">{item.secondaryMuscles}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide font-semibold">
                    Target <Text className="font-bold text-neutral-800">{item.target}</Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(500).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide font-semibold">
                    Instructions
                </Animated.Text>



                {
                    item.instructions.split(',').map((instruction, index) => {
                        return (
                            <Animated.Text
                                entering={FadeInDown.delay((index+6)*100).duration(300).springify()}
                                key={index}
                                style={{ fontSize: hp(1.7) }}
                                className="text-neutral-800"
                            >
                                {instruction}

                            </Animated.Text>
                        )

                    })
                }
            </ScrollView>
        </View>
    )
}