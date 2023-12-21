import { Stack, Tabs } from "expo-router"
import { Image } from 'react-native'


const Layout = () => {
    return <Tabs>
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
    </Tabs>
}








export default Layout;