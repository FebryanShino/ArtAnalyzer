import { Stack } from "expo-router"

const Layout = () => {
    return <Stack>
        <Stack.Screen name="index" options={
            {headerShown: false}
        }/>
        <Stack.Screen name="About/main" options={
            {headerTitle: 'About', headerShown: true}
        }/>
        <Stack.Screen name="variations/[variation]" options={
            {headerTitle: 'Variation', headerShown: true}
        }/>
    </Stack>
}


export default Layout;