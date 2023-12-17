import { Link, router } from 'expo-router';
import { View, Text, Pressable, TouchableOpacity } from 'react-native'




const UserPage = () => {
    return (
    <View>
        <Text>Hello</Text>
        <TouchableOpacity onPress={ () => router.push('/') }>
            <Text>haosdifhaisdf</Text>
        </TouchableOpacity>
    </View>
    )
}



export default UserPage;