import { Link, router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';




const UserPage = () => {
    const { url, variation, ratio } = useLocalSearchParams();
    const palettes = JSON.parse(useLocalSearchParams().colorPalette);
    palettes.sort((a, b) => {
        let [r1, g1, b1] = a;
        let [r2, g2, b2] = b;
        let l1 = (.2126*r1 + .7152*g1 + .0722*b1)
        let l2 = (.2126*r2 + .7152*g2 + .0722*b2)
        return l1 - l2;
    });

    const formatRGB = (rgb) => {
        let [r, g, b] = rgb;
        return `rgb(${r}, ${g}, ${b})`;
    }




    const varDesc = {
        Lineart: 'This variation uses Python Imaging Library (PIL) to process an image by converting it to grayscale and applying the Laplacian edge detection algorithm. The resulting image highlights edges with an inverted color scheme, emphasizing areas of rapid intensity',
        Lightness: 'This variation Python Imagin Library (PIL) to process an image by converting it to grayscale by using the "L" mode, effectively representing the image in terms of its lightness values rather than color information'
    }


    return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 20, height: '100%'}}>
        <Text style={{fontSize: 40, fontWeight: 200, color: formatRGB(palettes[0])}}>{variation}</Text>
        <Text style={{fontSize: 15, fontWeight: 100, color: formatRGB(palettes[1])}}>{varDesc[variation]}</Text>
        <Image source={{uri: url}} style={{width: undefined, height: '50%', aspectRatio: 1/ratio, alignSelf: 'center', marginTop: 40}}/>
        <TouchableOpacity
        style={{
            backgroundColor: formatRGB(palettes[0]),
            width: 100/ratio + '%',
            height: 40,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Text
            style={{fontSize: 20, fontWeight: 200, color: formatRGB(palettes[2])}}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginTop: 'auto', backgroundColor: formatRGB(palettes[0]), width: 80, height: 40, justifyContent: 'center', alignItems: 'center'}}
        onPress={ () => router.push('/') }
        >
            <Text style={{fontSize: 20, fontWeight: 100, color: formatRGB(palettes[2])}}>Back</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}



export default UserPage;