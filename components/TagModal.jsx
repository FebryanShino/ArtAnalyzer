import { View, Text, Modal, TouchableOpacity, Image, Alert } from 'react-native'

const TagModal = ({data, posts, visible, status}) => {
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
                { data.other_names.map(( name ) => (

                    <TouchableOpacity
                    onPress={() => Alert.alert(name, name) }
                    style={{
                        backgroundColor: 'hsl(0,0%, 95%)',
                        padding: 5,
                        minWidth: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}
                    >
                        <Text style={{fontSize: 10, fontWeight: 100}}>{name}</Text>
                        
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
            <View style={{flexDirection: 'row', gap: 10}}>
                    {posts.map(( post ) => (
                        <Image source={{uri: post.large_file_url}} style={{flex: 2, width: '100%', height: undefined, aspectRatio: 1}}/>
                    )
                    )}
            </View>
            <View>

            </View>
        </View>
    </Modal>
    )
}

export default TagModal;
