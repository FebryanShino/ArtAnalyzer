import { View, Text, Modal, Pressable, Alert } from 'react-native'






const ColorDetails = ({data, visible, status}) => {

    const modalStyle = {
        main: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'left',
            gap: 3
        },
        title: {
            fontSize: 15,
            fontWeight: 200
        },
        subTitle: {
            fontWeight: 100,
            fontSize: 12,
            marginTop: 8
        },
        percentage: {
            fontSize: 15,
            fontWeight: 200
        }
    };
    
    return (
    <Modal
    
    animationType="slide"
    transparent={true}
    visible={visible}
    >
        <View
        style={{
            alignSelf: 'center',
            marginVertical: '30%',
            width: '80%',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: .2,
            borderRadius: 10,
            padding: 20,
            flex: 1
            
        }}
        >
            <View style={{flexDirection: 'row', height: '8%', alignItems: 'center'}}>
                <Text
                style={{
                    fontSize: 25,
                    fontWeight: 200,
                    fontVariant: 'bold',
                    flex: 2
                    }}
                >Color Details</Text>
                <Pressable
                style={{height: '100%', aspectRatio: 1, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => status(false)}
                >
                    <View style={{width: '80%', height: 1, backgroundColor: 'black', transform: 'rotate(45deg)'}}></View>
                    <View style={{width: '80%', height: 1, backgroundColor: 'black', transform: 'rotate(-45deg) translateY(-1dp)'}}></View>
                </Pressable>
            </View>
            
            <View
            style={{
                width: '100%',
                height: '25%',
                flexDirection: 'row',
                position: 'relative',
                marginTop: '12%'
            }}
            >
                <View style={{ height: '100%', width: undefined, aspectRatio: 1, backgroundColor: data.hex.value, borderRadius: 5}}></View>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 2, padding: 5}}>
                    <Text style= {{
                        fontSize: 20,
                        fontWeight: 100,
                        fontVariant: 'bold'
                    }}
                >{data.name.value}</Text>
                </View>
            </View>

            <View style={{marginTop: '10%', gap: 20}}>
                <Text style={{fontSize: 20, fontWeight: 200}}>Value</Text>
                <View>
                    <Text style={modalStyle.title}>RGB</Text>
                    <View
                    style={modalStyle.main}>
                        <View style={{height: 2, width: data.rgb.fraction.r*85 + '%', backgroundColor: `rgb(255, ${255-data.rgb.r}, ${255-data.rgb.r})`}}></View>
                        <Text style={modalStyle.percentage}>{Math.round(data.rgb.fraction.r*100) + '%'}</Text>
                    </View>
                    <View
                    style={modalStyle.main}>
                        <View style={{height: 2, width: data.rgb.fraction.g*85 + '%', backgroundColor: `rgb(${255-data.rgb.g}, 255, ${255-data.rgb.g})`}}></View>
                        <Text style={modalStyle.percentage}>{Math.round(data.rgb.fraction.g*100) + '%'}</Text>
                    </View>
                    <View
                    style={modalStyle.main}>
                        <View style={{height: 2, width: data.rgb.fraction.b*85 + '%', backgroundColor: `rgb(${255-data.rgb.b}, ${255-data.rgb.b}, 255)`}}></View>
                        <Text style={modalStyle.percentage}>{Math.round(data.rgb.fraction.b*100) + '%'}</Text>
                    </View>
                </View>
                <View>
                    <Text style={modalStyle.title}>HSL</Text>
                    <View>
                        <Text style={modalStyle.subTitle}>Hue</Text>
                        <View
                        style={modalStyle.main}
                        >
                            <View style={{
                                height: 30, width: '100%', flex: 2, backgroundColor: `hsl(${data.hsl.h}, 100%, 50%)`,
                                justifyContent: 'center', alignItems: 'center', borderRadius: 5
                                }}
                            >
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 200,
                                fontVariant: 'bold',
                                color: 'white'
                            }}>{data.hsl.h}</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View>
                        <Text style={modalStyle.subTitle}>Saturation</Text>
                        <View
                        style={modalStyle.main}
                        >
                            <View style={{height: 2, width: data.hsl.fraction.s*85 + '%', backgroundColor: `hsl(${data.hsl.h}, ${data.hsl.s}%, 50%)`}}></View>
                            <Text style={modalStyle.percentage}>{data.hsl.s + '%'}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={modalStyle.subTitle}>Lightness</Text>
                        <View
                        style={modalStyle.main}
                        >
                            <View style={{height: 2, width: data.hsl.fraction.l*85 + '%', backgroundColor: `hsl(0, 0%, ${data.hsl.l}%)`}}></View>
                            <Text style={modalStyle.percentage}>{data.hsl.l + '%'}</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    </Modal>
    )
}


export default ColorDetails;