import { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Image, Alert } from 'react-native'
import { Audio } from 'expo-av';
import {API_URL, HF_KEY} from '@env'


const TagModal = ({data, posts, visible, status}) => {
    const [selectedNameIndex, setSelectedNameIndex] = useState();
    const [fetchFinished, setFetchFinished] = useState(true);

    return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    >
        <View
        style={{
            backgroundColor: 'white',
            width: '80%',
            height: '50%',
            alignSelf: 'center',
            marginTop: '50%',
            padding: 20,
            position: 'relative',
            borderWidth: .2,
            borderColor: 'hsl(0, 0%, 30%)'
        }}
        >
            <TouchableOpacity style={{
                position: 'absolute',
                width: '12%',
                aspectRatio: 1,
                height: undefined,
                backgroundColor: 'black',
                right: 20,
                top: 20,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
            }}
            onPress={() => status(false)}
            >
                <Text style={{fontSize: 15, fontWeight: 100, color: 'white'}}>X</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 30, fontWeight: 200}}>{data.title}</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 3}}>
                { data.other_names.map(( name, index ) => (

                    <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setSelectedNameIndex(index);
                        setFetchFinished(false);
                        fetchSound(name).then( async (data) => {
                            
                            const { sound } = await Audio.Sound.createAsync({uri: data})
                            
                            await sound.stopAsync();
                            await sound.playAsync();
                            setFetchFinished(true)

                            
                            setTimeout(() => sound.unloadAsync(), 1500)
                        })
                    } }
                    style={{
                        backgroundColor: selectedNameIndex === index && !fetchFinished ? 'black' : 'hsl(0,0%, 95%)',
                        padding: 5,
                        minWidth: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}
                    >
                        <Text style={{
                            fontSize: 10, fontWeight: 100,
                            color: selectedNameIndex === index && !fetchFinished ? 'white' : 'black'
                            }}>{name}</Text>
                        
                    </TouchableOpacity>
                ))}
            </View>
            <Text
            style={{
                fontSize: 13,
                fontWeight: 100,
                color: 'hsl(0,0%, 10%)',
                marginTop: '10%'
            }}
            >{data.body.split('.')[0]}</Text>
            <Text
            style={{
                fontSize: 20,
                fontWeight: 200,
                color: 'hsl(0,0%, 10%)',
                marginTop: 'auto'
            }}
            >Related Posts</Text>
            
            { posts && (<View style={{flexDirection: 'row', gap: 10}}>
                    {posts.map(( post, index ) => (
                        <Image
                        key={ index }
                        source={{uri: post.large_file_url}}
                        style={{flex: 2, width: '100%', height: undefined, aspectRatio: 1}}

                        />
                    )
                    )}
            </View>
            )}
            <View>

            </View>
        </View>
    </Modal>
    )
}

export default TagModal;



const fetchSound = async (text) => {
    const url = "https://febryans-mikamika.hf.space/run/predict";
    const token = "Bearer " + HF_KEY;
    const chara = 'ayaka-jp';
    const lang = 'Japanese';
    const noise = 0.6;
    const noiseW = 0.668;
    const length = 1;
    const isSymbol = false;
    const data = {
        data: [
            chara,
            text,
            lang,
            noise,
            noiseW,
            length,
            isSymbol
        ]
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log('fetched')
    return responseData.data[1];
}