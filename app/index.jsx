import { View, Text, TextInput, Button, Image, Alert, FlatList, ScrollView, SafeAreaView, TouchableOpacity,
StyleSheet, Modal, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { Link, router } from 'expo-router';




const home = () => {
    const COLORTYPE = ['Primary', 'Secondary', 'Accent'];

    const [analyzeStatus, setAnalyzeStatus] = useState('Analyze Image');
    const [tags, setTags] = useState('');
    const [posts, setPosts] = useState();
    const [selectedImg, setSelectedImg] = useState(
     
        {"approver_id": null, "bit_flags": 0, "created_at": "2023-12-15T04:56:06.946-05:00", "down_score": 0, "fav_count": 2, "file_ext": "jpg", "file_size": 1213172, "file_url": "https://cdn.donmai.us/original/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6983465, "image_height": 1600, "image_width": 1200, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": true, "large_file_url": "https://cdn.donmai.us/sample/02/1f/sample-021f5d1f19c98b0a314451f502fd4f80.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "021f5d1f19c98b0a314451f502fd4f80", "media_asset": {"created_at": "2023-12-15T04:52:53.817-05:00", "duration": null, "file_ext": "jpg", "file_key": "h0g9Z0Hwu", "file_size": 1213172, "id": 17665419, "image_height": 1600, "image_width": 1200, "is_public": true, "md5": "021f5d1f19c98b0a314451f502fd4f80", "pixel_hash": "a56a470f8362aaf8c58b4d34e76803ad", "status": "active", "updated_at": "2023-12-15T04:52:57.096-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "rating": "g", "score": 3, "source": "https://twitter.com/No23kappagatari/status/1734913650815819890", "tag_count": 29, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 1, "tag_count_general": 25, "tag_count_meta": 1, "tag_string": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat highres hijiri_byakuren jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace no23kappagatari puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo touhou white_background white_dress", "tag_string_artist": "no23kappagatari", "tag_string_character": "hijiri_byakuren", "tag_string_copyright": "touhou", "tag_string_general": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo white_background white_dress", "tag_string_meta": "highres", "up_score": 3, "updated_at": "2023-12-15T04:56:06.946-05:00", "uploader_id": 820653}
    );
    const [currentOutput, setCurrentOutput] = useState(
         
        {"approver_id": null, "bit_flags": 0, "created_at": "2023-12-15T04:56:06.946-05:00", "down_score": 0, "fav_count": 2, "file_ext": "jpg", "file_size": 1213172, "file_url": "https://cdn.donmai.us/original/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6983465, "image_height": 1600, "image_width": 1200, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": true, "large_file_url": "https://cdn.donmai.us/sample/02/1f/sample-021f5d1f19c98b0a314451f502fd4f80.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "021f5d1f19c98b0a314451f502fd4f80", "media_asset": {"created_at": "2023-12-15T04:52:53.817-05:00", "duration": null, "file_ext": "jpg", "file_key": "h0g9Z0Hwu", "file_size": 1213172, "id": 17665419, "image_height": 1600, "image_width": 1200, "is_public": true, "md5": "021f5d1f19c98b0a314451f502fd4f80", "pixel_hash": "a56a470f8362aaf8c58b4d34e76803ad", "status": "active", "updated_at": "2023-12-15T04:52:57.096-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "rating": "g", "score": 3, "source": "https://twitter.com/No23kappagatari/status/1734913650815819890", "tag_count": 29, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 1, "tag_count_general": 25, "tag_count_meta": 1, "tag_string": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat highres hijiri_byakuren jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace no23kappagatari puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo touhou white_background white_dress", "tag_string_artist": "no23kappagatari", "tag_string_character": "hijiri_byakuren", "tag_string_copyright": "touhou", "tag_string_general": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo white_background white_dress", "tag_string_meta": "highres", "up_score": 3, "updated_at": "2023-12-15T04:56:06.946-05:00", "uploader_id": 820653}
    
    );
    const [lineart, setLineart] = useState({
        urls: [
            'https://safebooru.org//samples/4450/sample_34bd2f6cab78d7271e4c61cd377c198d44059afe.jpg?464128012',
            'https://safebooru.org//samples/4450/sample_34bd2f6cab78d7271e4c61cd377c198d44059afe.jpg?464128012'
        ],
        aspectRatio: 1
    });
    const [colors, setColors] = useState()
    const [colorModalVisible, setColorModalVisible] = useState(false);
    const [tagModalVisible, setTagModalVisible] = useState(false);
    const [colorData, setColorData] = useState('');
    const [tagsData, setTagsData] = useState(
        [
            '1girl',
            'solo',
            'long_hair',
            'monochrome',
            'ponytail',
            'weapon',
            'holding',
            'very_long_hair',
            'hair_ornament',
            'bangs',
            'greyscale'
        ]
    );
    const [tagWiki, setTagWiki] = useState({other_names: []});
    const [relatedPosts, setRelatedPosts] = useState();

    
    const booru = async (text, length) => {
        let data = [];
        let ids = []
        for (let i = 0; i < length; i++) {
            let params = new URLSearchParams({tags: text + ' -filetype:mp4,webm,mov,zip'});
            let url = 'https://danbooru.donmai.us/posts/random.json?' + params.toString();
            const res = await fetch(url);
            if (!res.ok) {
                Alert.alert('Status', 'Not found');
                return;
            }
            const dict = await res.json();

            if (ids.includes(dict.id)) {
                continue;
            }
            data.push(dict);
            ids.push(dict.id);
        }
        
        setPosts(data);
    }
    

   

    const rgbToHex = (rgb) => {
        let [r, g, b] = rgb;
        
        const componentToHex = (char) => {
          var hex = char.toString(16);
          return hex.length == 1 ? '0' + hex : hex;
        }
      
        let hexString = "#" + componentToHex(parseInt(r)) + componentToHex(parseInt(g)) + componentToHex(parseInt(b));

        return hexString;
    }

    const cook = async (url) => {
        setAnalyzeStatus('Analyzing...');
        const res = await fetch('https://febryans-pytube.hf.space/run/predict', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: [url, 3]})
        });
        let content = (await res.json()).data;
        let dominantColors = content[1].data;

        let colorArr = [];
        for (let i = 0; i < dominantColors.length; i++) {
            colorArr.push([dominantColors, rgbToHex(dominantColors[i])])
        }
        
        setColors(colorArr);
        setLineart({urls: [content[0], content[2]], aspectRatio: content[3]});
        setTagsData(selectedImg.tag_string_general.split(' '));
        setCurrentOutput(selectedImg);
        setAnalyzeStatus('Analyze Image');
    }


    const ColorDetails = ({data, visible}) => {
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
                    onPress={() => setColorModalVisible(!visible)}
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

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            backgroundColor: 'white',
            paddingTop: 50,
            height: undefined
        }}
        >
            <View style={{padding: 20}}>
                <Text style={{fontSize: 20, fontWeight: 100}}>Hello World</Text>
                <Text style={{fontSize: 20, fontWeight: 100}}>This is</Text>
                <Text style={{fontSize: 60, fontVariant: 'bold', fontWeight: 100}}>ArtAnalyzer</Text>
                <Text style={{fontSize: 15, fontWeight: 100}}>By FebryanShino</Text>
            </View>
            
            <View
            style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'hsl(0, 0%, 96%)',
                justifyContent: 'space-between',
                height: 50
            }}
            >
                <TextInput
                onChangeText={setTags}
                value={tags}
                style={{
                    flex: 2,
                    paddingLeft: 20,
                    fontSize: 20
                }}
                placeholder='Tags'
                />
                <TouchableOpacity
                onPress={ () => booru(tags, 20) }
                style={{
                    backgroundColor: 'black',
                    height: '100%',
                    width: undefined,
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        fontWeight: 100,
                    }}>{tags ? '>': 'A'}</Text>
                </TouchableOpacity>
            </View>
            
            {posts && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {posts.map( item => (
                <TouchableOpacity
                onPress={ () => setSelectedImg(item) }
                >
                    <Image
                        source={{ uri: item.large_file_url }}
                        style={{width: undefined, height: 200, aspectRatio: item.image_width/item.image_height}}
                    ></Image>
                </TouchableOpacity>
                 ))}
            </ScrollView>
            )}

            <View style={{width: '100%', height: 500}}>
                <View style={{
                        height: '60%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image source={{uri: selectedImg.large_file_url}} style={{
                        maxHeight: '90%',
                        width: '100%',
                        aspectRatio: selectedImg.image_width/selectedImg.image_height
                    }}/>
                </View>
                <View style={{flex: 2, width: '100%', padding: 20}}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'hsl(0,0%,96%)',
                        borderRadius: 3,
                        justifyContent: 'flex-end',
                        padding: 10,
                        gap: 3
                    }}>
                        <View style={{flexDirection: 'row', marginBottom: 'auto'}}>
                            <Text style={{fontSize: 20, fontWeight: 100}}>Art by </Text>
                            <TouchableOpacity
                            style={{justifyContent: 'center', justifyContent: 'center'}}
                            onPress={ () => Alert.alert('ayaya', selectedImg.tag_string_artist)}
                            >
                                <Text style={{fontSize: 20, fontWeight: 200, textDecorationLine: 'underline'}}>{selectedImg.tag_string_artist}</Text>
                            </TouchableOpacity>
                        </View>
                         
                            
                        
                        <Text style={{fontSize: 18, fontWeight: 100}}>File Details</Text>
                        <Text style={{fontSize: 12, fontWeight: 100}}>Resolution: {selectedImg.image_width}x{selectedImg.image_height}</Text>
                        <Text style={{fontSize: 12, fontWeight: 100}}>Size: {(selectedImg.file_size/1024**2).toFixed(2)} MB</Text>
                        <TouchableOpacity
                        style={{
                            width: '10%',
                            height: undefined,
                            aspectRatio: 1,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center'
                            }}
                        onPress={ () => Alert.alert('Source', selectedImg.source) }
                        >
                            <Text style={{fontSize: 13, fontWeight: 200, color: 'white'}}>S</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity
            style={{
                marginTop: 10,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: analyzeStatus === 'Analyze Image' ? 'black':'white',
                height: 50,
                width: '60%',
                alignSelf: 'center'
            }}
            onPress={ () => cook(selectedImg.large_file_url) }
            >
                <Text style={{fontSize: 25, fontWeight: 100, color: analyzeStatus === 'Analyze Image' ? 'white':'black'}}>{analyzeStatus}</Text>
            </TouchableOpacity>


            {!colors && (
            <View style={{width: '100%', height: 200, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 200, color: 'black'}}>Disclaimer</Text>
                <Text style={{fontSize: 18, fontWeight: 100, color: 'black'}}>Your prediction will be shown here</Text>
            </View>
            )}





            {colors && (<View>
            { currentOutput.id !== selectedImg.id && (
                <View style={{width: '100%', height: 200, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: 200, color: 'red'}}>Alert</Text>
                    <Text style={{fontSize: 18, fontWeight: 100, color: 'red'}}>Prediction has not been updated yet</Text>
                    <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        width: '30%',
                        aspectRatio: 2.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: 10
                    }}
                    onPress={() => setSelectedImg(currentOutput)}
                    >
                        <Text style={{fontSize: 18, fontWeight: 300, color: 'white'}}>Revert</Text>
                    </TouchableOpacity>
                </View>
            )}

            <Text
            style={styles.subHeader}
            >Dominant Colors</Text>
            <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 20}}>
            { colors.map( (item, index) => (
                <TouchableOpacity
                style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}
                onPress={ (async () => {
                    let response = await fetch(`https://www.thecolorapi.com/id?hex=${item[1].slice(1)}`);
                    let data = await response.json()
                    setColorData(data);
                    setColorModalVisible(true);
                })}
                >
                    <View style={{backgroundColor: item[1], width: 100, height: undefined, aspectRatio: 1, borderRadius: 10}}></View>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 200}}>{COLORTYPE[index]}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            </View>

            { colorData && (
                <ColorDetails data={colorData} visible={colorModalVisible}></ColorDetails>
            )}
            
            
            <Text
            style={styles.subHeader}
            >Variations</Text>
            <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 20,
                paddingHorizontal: 10
            }}
            >
            {lineart.urls.map((item, index) => (
                <TouchableOpacity
                style={styles.variation}
                onPress={() => router.push({
                    pathname: `/variations/${['Lineart', 'Lightness'][index]}`,
                    params: {
                        url: item,
                        ratio: lineart.aspectRatio,
                        colorPalette: JSON.stringify(colors[0][0])
                    }
                })}
                >
                    <Text style={{fontSize: 18, fontWeight: 100, marginBottom: 20}}>{['Lineart', 'Lightness'][index]}</Text>
                    <Image source={{uri: item}} style={{width: '100%', height: undefined, aspectRatio: 1}}/>
                </TouchableOpacity>
            ))}
            </View>

            <Modal
            animationType="slide"
            transparent={true}
            visible={false}
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
                </View>
            </Modal>





            <View>
                <Text style={styles.subHeader}>Tags</Text>
                <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                paddingHorizontal: 5,
                marginTop: 10
                }}>
                    { tagsData.map( (item) => (
                        <TouchableOpacity
                        onPress={(async () => {
                            let tagUrl = `https://danbooru.donmai.us/wiki_pages/${item}.json`;
                            
                            let resTag = await fetch(tagUrl);
                            let dataTag = await resTag.json();
                            
                            setTagWiki(dataTag);
                            let resPost = await fetch(`https://danbooru.donmai.us/posts.json?tags=${item}%20rating:g&limit=2`);
                            let dataPost = await resPost.json();
                            
                            setRelatedPosts(dataPost);
                            setTagModalVisible(!tagModalVisible);
                            
                        } )}
                        style={{backgroundColor: 'hsl(0,0%, 95%)', padding: 5, minWidth: 50, alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Text style={{fontSize: 14, fontWeight: 200}}>{item}</Text>
                        </TouchableOpacity>
                        

                    ))
                    }
                </View>
                {tagModalVisible && (<Modal
                animationType="slide"
                transparent={true}
                visible={tagModalVisible}
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
                        onPress={() => setTagModalVisible(!tagModalVisible)}
                        >
                            <Text style={{fontSize: 15, fontWeight: 100, color: 'white'}}>X</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 30, fontWeight: 200}}>{tagWiki.title}</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 3}}>
                            { tagWiki.other_names.map(( name ) => (

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
                        >{tagWiki.body.split('.')[0]}</Text>
                        <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 200,
                            color: 'hsl(0,0%, 10%)',
                            marginTop: 'auto'
                        }}
                        >Related Posts</Text>
                        <View style={{flexDirection: 'row', gap: 10}}>
                                {relatedPosts.map(( post ) => (
                                    <Image source={{uri: post.large_file_url}} style={{flex: 2, width: '100%', height: undefined, aspectRatio: 1}}/>
                                )
                                )}
                        </View>
                        <View>

                        </View>
                    </View>
                </Modal>)}
            </View>
            </View>)}

            <View
            style={{
                flex: 2,
                backgroundColor: 'black',
                width: '100%',
                height: 200,
                padding: 20,
                flexDirection: 'row',
                marginBottom: 50
            }}
            >
                <View style={{flex: 2, width: '50%', height: '100%', justifyContent: 'flex-end'}}>
                    <Text style={{fontSize: 30, fontWeight: 100, color: 'white', marginBottom: 'auto'}}>The end</Text>
                    <Text style={{fontSize: 30, fontWeight: 100, color: 'white'}}>Learn more</Text>
                    <Link
                    style={{fontSize: 30, fontWeight: 100, color: 'white', backgroundColor: 'red', width: 100, alignItems: 'center'}}
                    href="/About/main"><Text>Here</Text></Link>
                </View>
                <View style={{flex: 2, width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white'}}>
                    <Text style={{fontSize: 30, fontWeight: 100, color: 'white'}}>Download</Text>
                    <Link href="/" style={{backgroundColor: 'white', padding: 5}}>
                        <Text style={{fontSize: 30, fontWeight: 100, color: 'black'}}>APK</Text>
                    </Link>
                </View>
                
            </View>
        </ScrollView>
    );
}


const styles = {
    subHeader: {fontSize: 30, fontWeight: 100, alignSelf: 'center', marginTop: 100},
    variation: {
        width: '30%',
        height: 'flex',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    }
  };


export default home;