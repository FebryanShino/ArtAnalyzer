import { Link, router } from 'expo-router';
import { View, Text, Pressable, TouchableOpacity, SafeAreaView } from 'react-native'




const Home = () => {
    return (
    <SafeAreaView>
        <Text>Hello</Text>
        <TouchableOpacity onPress={ () => router.push('/') }>
            <Text>haosdifhaissdfasdfasdfdf</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}



export default Home;