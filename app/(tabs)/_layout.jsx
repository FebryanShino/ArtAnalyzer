import { Stack } from "expo-router"

const Layout = () => {
    return <Stack>
        <Stack.Screen name="analyzer" options={
            {headerShown: false}
        }/>
        <Stack.Screen name="About/main" options={
            {headerTitle: 'About', headerShown: true}
        }/>
        <Stack.Screen name="variations/[variation]" options={
            {
                headerTitle: 'Variation', headerShown: true,
                presentation: 'fullScreenModal',
                animation: 'fade',
                headerShown: false
            }
        }/>
        <Stack.Screen name="image/[id]" options={{
            presentation: 'fullScreenModal',
            animation: 'fade',
            headerShown: false
            }}/>
    </Stack>
}


export default Layout;