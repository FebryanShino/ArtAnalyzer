import { Link, router } from 'expo-router';
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';


const Home = () => {
    const [sound, setSound] = useState('');
    const [granted, setGranted] = useState();
    const [audioList, setAudioList] = useState();
    const [currentAudio, setCurrentAudio] = useState({filename: 'bruh'});
    // useEffect(() => {
    //     return sound
    //       ? () => {
    //           console.log('Unloading Sound');
    //           sound.stopAsync();
    //           sound.unloadAsync();
    //         }
    //       : undefined;
    //   }, [sound]);

    const getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync();
        if (!permission.granted) {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            console.log(status)
            setGranted(status)
        }
    }
    getPermission();

    const getAudio = async () => {
        const audio = await MediaLibrary.getAssetsAsync({mediaType: 'audio', first: 10})
        setAudioList(audio.assets);
    }
    getAudio()
    


    const playSound = async () => {
        let load;
        if(!sound) {
            console.log('loading')
            load = await Audio.Sound.createAsync({uri: currentAudio.uri})
            setSound(load.sound)
            
        }
        // let status = await sound.getStatusAsync().isPlaying;
        // console.log(status)
        // if (isPlaying) {
        //     await sound.stopAsync();
        // }
        
        await sound.playAsync()

        
    }

    return (
    <SafeAreaView style={{paddingTop: 100}}>
    <Text>{currentAudio.filename ? currentAudio.filename : 'Ayayaya'}</Text>
    <ScrollView>
    <View>
            <Text>Hello</Text>
            <TouchableOpacity onPress={ () => {
                playSound()
            }}>
                <Text>haosdifhaissdfasdfasdfdf</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ async () => {
                console.log('asdfsdf');
            }}>
                <Text>hads</Text>
            </TouchableOpacity>
        </View>
        <View>
        {audioList && (audioList.map( item => (
            <TouchableOpacity
            onPress={() => setCurrentAudio(item)}
            ><Text>{item.filename}</Text></TouchableOpacity>
        )))}
        </View>
        
        
    </ScrollView>
    </SafeAreaView>
    )
}



export default Home;