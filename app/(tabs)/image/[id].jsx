import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Animated from 'react-native-reanimated'

const image = () => {
    const {imageId, url, imgW, imgH} = useLocalSearchParams();
    return (
        
        <SafeAreaView>
            <View>
            <Text>HffsdfsdfdsdfsddsfffdfsloS</Text>
            </View>
            <Animated.Image
            // sharedTransitionTag={imageId}
            source={{ uri: url }}
            style={{
                width: '100%',
                height: undefined,
                aspectRatio: imgW/imgH,
                borderRadius: 30,
                resizeMode: 'cover',
        }}
        />
        <Pressable
        onPress={() => router.push('../analyzer')}
        ><Text>Back</Text></Pressable>
        </SafeAreaView>
      
    )
}

export default image