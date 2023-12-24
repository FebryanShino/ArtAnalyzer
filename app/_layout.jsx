import { Stack, Tabs } from "expo-router"
import { Image } from 'react-native'


const Layout = () => {
    return <Tabs screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
        height: 70,
        borderWidth: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 350,
        borderColor: 'white',
        borderTopColor: 'white',
        backgroundColor: 'white',
        },
        tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
        },
        }}>
        <Tabs.Screen name="index" options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Image
                style={{height: '100%', aspectRatio: 1, borderRadius: 100}}
                source={{uri: 'https://cdn.donmai.us/sample/08/aa/__kamisato_ayaka_and_kamisato_ayaka_genshin_impact__sample-08aab9d0ca09bac1a724ffe85ea1a3e1.jpg'}}></Image>
            )
        }}
        />
        <Tabs.Screen name="(tabs)" options={
            {headerShown: false}
        }/>
        <Tabs.Screen name="music"/>
    </Tabs>
}








export default Layout;