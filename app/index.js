import { Link, router } from 'expo-router';
import { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import {API_URL} from '@env'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const Home = () => {
    const [sound, setSound] = useState('');
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

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


    const clock = () => {
        const date = new Date();
        
        let second = date.getSeconds();
        let minute = date.getMinutes();
        setSound([second, minute]);
    }
    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            const date = new Date();
        
            let second = date.getSeconds();
            
            let minute = date.getMinutes();
            setSound([second, minute]);
        }, 1000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures that the 

    return (
        <SafeAreaView style={{paddingTop: 100}}>
            <Text>huiasdhfui</Text>
            <Text>{sound[1]}:{sound[0]}</Text>
            <Text>{sound[0] % 10 === 0 ? 'it' : 'ayaya' }</Text>
            <TouchableOpacity onPress={ () => {
                return
            }}>
                <Text>haosdifhaissdfasdfasdfdf</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width: 200, height: 100, backgroundColor: 'black'}}
            onPress={ () => {
                schedulePushNotification();
            }}>
                <Text>hads</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
    
    

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
    
const registerForPushNotificationsAsync = async () => {
    let token;
    
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
        });
    }
    
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
        }
        if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
        }
        // Learn more about projectId:
        // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }
    
    return token;
    }

export default Home;