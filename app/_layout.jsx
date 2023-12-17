import { Stack } from "expo-router"

const Layout = () => {
    return <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="users/user"/>
        <Stack.Screen name="variations/[variation]" options={
            {headerTitle: 'Variation', headerShown: true}
        }/>
    </Stack>
}


export default Layout;