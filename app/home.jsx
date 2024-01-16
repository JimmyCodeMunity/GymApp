import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageSlider from '../components/imageSlider';
import BodyParts from '../components/BodyParts';


const Home = () => {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style="dark" />
            {/* Punchline and avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-700">
                        Ready To
                    </Text>
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-rose-500">
                        WorkOut
                    </Text>
                </View>



                <View className="flex justify-center items-center space-y-2">
                    <Image source={require('../assets/images/avatar.png')}
                        style={{ height: hp(6), width: hp(6) }}
                        className="rounded-full"
                    />
                    <View
                    style={{ height:hp(5.5),width:hp(5.5) }}
                    className="rounded-full justify-center items-center bg-neutral-200 flex border -[3px] border-neutral-300">
                        <Ionicons name="notifications" size={30} color="gray" />
                    </View>
                </View>




            </View>



            {/* image slider here */}
            <View>
                <ImageSlider/>
            </View>


            {/* body parts */}
            <View className="flex-1">
                <BodyParts/>
            </View>




        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})