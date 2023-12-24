import { Link, router } from 'expo-router';
import { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import {API_URL, HF_KEY} from '@env'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';
import greetingText from '../assets/text';
import registerForPushNotificationsAsync from '../components/notification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const Home = () => {
    const { width, height } = Dimensions.get('screen');
    const [date, setDate] = useState('');
    const [sound, setSound] = useState('');
    const [audioURI, setAudioURI] = useState();
    const [fetchFinished, setFetchFinished] = useState(true);



    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        // registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    

    useEffect(() => {

        // fetchSound(greetingText(10, 'night')).then(async data => {
        //     const { sound } = await Audio.Sound.createAsync({uri: data})
        //     sound.playAsync()
        //     setSound(sound);
        //     console.log('PING')
        // })
        
                    
        // Update the current time every second
        const intervalId = setInterval(() => {
            const date = new Date();
        
            let second = date.getSeconds();
            let hour = date.getHours();
            let minute = date.getMinutes();
            setDate([hour, minute]);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);


    return (
        <SafeAreaView style={{paddingTop: 100, paddingHorizontal: 10, backgroundColor: '#ab93c9'}}>
            <Image source={ require('../assets/city.gif')}
            style={{width: width, height: undefined, aspectRatio: 500/708, position: 'absolute', top: height - 608}}
            
            ></Image>
            <Text>Hello</Text>
            <Text style={{fontSize: 70}}>{date[0]}:{date[1]}</Text>
            <View
            style={{width: '100%', height: 150, backgroundColor: 'black', borderRadius: 20, overflow: 'hidden', flexDirection: 'row'}}>
                <Image
                source={ require('../assets/ayaya.png') }
                style={{width: undefined, aspectRatio: 1724/1954, height: '100%', top: 10}}
                />
                <View style={{ padding: 10, width: '100%', flex: 2}}>
                    <Text style={{color: 'white'}}>{ greetingText(23, date[0]) }</Text>
                    <TouchableOpacity
                    onPress={ () => {
                        setFetchFinished(false);
                        fetchSound(greetingText(23, date[0])).then( async (data) => {
                            const { sound } = await Audio.Sound.createAsync({uri: data})
                            sound.stopAsync();
                            sound.playAsync();
                            setSound(sound);
                            console.log('PING');

                            setFetchFinished(true)
                        })
                    }}
                    style={{
                        backgroundColor: fetchFinished ? 'yellow' : 'white',
                        height: '30%',
                        aspectRatio: 1,
                        marginTop: 'auto',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        flexDirection: 'row'
                    }}
                    >
                        <Svg
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="black"
                        >
                            <Path d="M439.5 236c0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4c0 70-64 126.9-142.7 126.9-78.7 0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4c0 86.2 71.5 157.4 163.1 166.7v57.5H212c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h88c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" />
                            <Path d="M256 323.5c51 0 92.3-41.3 92.3-92.3V103.3c0-51-41.3-92.3-92.3-92.3s-92.3 41.3-92.3 92.3v127.9c0 51 41.3 92.3 92.3 92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3 23.5 52.3 52.3v127.9c0 28.8-23.5 52.3-52.3 52.3s-52.3-23.5-52.3-52.3V103.3z" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{date[0] % 10 === 0 ? 'it' : 'ayaya' }</Text>
            <TouchableOpacity onPress={ () => {
                return
            }}>
                <Text>haosdifhaissdfasdfasdfdf</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width: 200, height: 100, backgroundColor: 'black'}}
            onPress={ () => sound.unloadAsync() }>
                <Text>hads</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
    
    

export default Home;


const schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
        content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here'},
        },
        trigger: { seconds: 1 },
    });
}


const fetchSound = async (text) => {
    const url = "https://febryans-mikamika.hf.space/run/predict";
    const token = "Bearer " + HF_KEY;
    const chara = 'ayaka-jp';
    const lang = 'Japanese';
    const noise = 0.6;
    const noiseW = 0.668;
    const length = 1;
    const isSymbol = false;
    const data = {
        data: [
            chara,
            text,
            lang,
            noise,
            noiseW,
            length,
            isSymbol
        ]
    }
    console.log(data)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log('fetched')
    return responseData.data[1];
}