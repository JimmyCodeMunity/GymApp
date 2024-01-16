import { View, Text ,FlatList,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRouter } from 'expo-router'
import Animated,{FadeIn,FadeInDown,FadeOut} from 'react-native-reanimated'



export default function ExerciseList({data}) {
    const router = useRouter()
  return (
    <View className="mx-4">
      

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
      />
    </View>
  )
}


const ExerciseCard = ({item,router,index}) =>{
    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(5)}>
            <TouchableOpacity className="flex py-3 space-y-2" onPress={()=>router.push({pathname: '/exerciseDetails', params:item})}>
                <View className="bg-neutral-200 shadow rounded-[5px]">
                    <Image
                    source={{ uri:item.gifUrl }}
                    contentFit="cover"
                    style={{ width:wp(44),height:wp(52) }}
                    className="rounded-[25px]"
                    />
                </View>

                <Text 
                className="text-neutral-700 font-semibold ml-1 tracking-wide"
                 style={{ fontSize:hp(1.7) }}>
                    {item?.name>20? item.slice(0,12)+'...' : item.name}
                 </Text>

            </TouchableOpacity>
        </Animated.View>
    )
}