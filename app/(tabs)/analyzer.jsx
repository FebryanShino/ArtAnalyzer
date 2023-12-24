import { View, Text, TextInput, Button, Image, Alert, ScrollView, SafeAreaView, TouchableOpacity,
StyleSheet, Modal, Pressable, Dimensions } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Link, router } from 'expo-router';
import ColorDetails from '../../components/ColorModal'
import TagModal from '../../components/TagModal';
import Animated from 'react-native-reanimated';


const home = () => {
    const { width, height } = Dimensions.get('screen');
    const COLORTYPE = ['Primary', 'Secondary', 'Accent'];

    const [analyzing, setAnalyzing] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [tags, setTags] = useState('');
    const [posts, setPosts] = useState([
        {"id":2552401,"created_at":"2016-11-25T21:40:42.851-05:00","uploader_id":463832,"score":44,"source":"http://1041uuu.tumblr.com/post/123357559298/original","md5":"278c8023527cf8a4cc12e033e20b1433","last_comment_bumped_at":null,"rating":"g","image_width":500,"image_height":708,"tag_string":"animated animated_gif bridge building car city cityscape commentary_request crane_(machine) evening gradient_sky lamppost moon motor_vehicle no_humans original outdoors pixel_art reflection ripples scenery science_fiction sky star_(sky) starry_sky sunset toyoi_yuuta train water","fav_count":72,"file_ext":"gif","last_noted_at":null,"parent_id":2552398,"has_children":false,"approver_id":null,"tag_count_general":24,"tag_count_artist":1,"tag_count_character":0,"tag_count_copyright":1,"file_size":613938,"up_score":45,"down_score":-1,"is_pending":false,"is_flagged":false,"is_deleted":false,"tag_count":29,"updated_at":"2023-05-05T04:22:33.095-04:00","is_banned":false,"pixiv_id":null,"last_commented_at":null,"has_active_children":false,"bit_flags":0,"tag_count_meta":3,"has_large":false,"has_visible_children":false,"media_asset":{"id":2519483,"created_at":"2016-11-25T21:40:42.851-05:00","updated_at":"2023-02-26T07:53:28.300-05:00","md5":"278c8023527cf8a4cc12e033e20b1433","file_ext":"gif","file_size":613938,"image_width":500,"image_height":708,"duration":4.16,"status":"active","file_key":"G0eUC2cNt","is_public":true,"pixel_hash":"278c8023527cf8a4cc12e033e20b1433","variants":[{"type":"180x180","url":"https://cdn.donmai.us/180x180/27/8c/278c8023527cf8a4cc12e033e20b1433.jpg","width":127,"height":180,"file_ext":"jpg"},{"type":"360x360","url":"https://cdn.donmai.us/360x360/27/8c/278c8023527cf8a4cc12e033e20b1433.jpg","width":254,"height":360,"file_ext":"jpg"},{"type":"720x720","url":"https://cdn.donmai.us/720x720/27/8c/278c8023527cf8a4cc12e033e20b1433.webp","width":500,"height":708,"file_ext":"webp"},{"type":"original","url":"https://cdn.donmai.us/original/27/8c/278c8023527cf8a4cc12e033e20b1433.gif","width":500,"height":708,"file_ext":"gif"}]},"tag_string_general":"bridge building car city cityscape crane_(machine) evening gradient_sky lamppost moon motor_vehicle no_humans outdoors pixel_art reflection ripples scenery science_fiction sky star_(sky) starry_sky sunset train water","tag_string_character":"","tag_string_copyright":"original","tag_string_artist":"toyoi_yuuta","tag_string_meta":"animated animated_gif commentary_request","file_url":"https://cdn.donmai.us/original/27/8c/278c8023527cf8a4cc12e033e20b1433.gif","large_file_url":"https://cdn.donmai.us/original/27/8c/278c8023527cf8a4cc12e033e20b1433.gif","preview_file_url":"https://cdn.donmai.us/180x180/27/8c/278c8023527cf8a4cc12e033e20b1433.jpg"},
        {"id":6285839,"created_at":"2023-05-06T10:40:45.524-04:00","uploader_id":748553,"score":152,"source":"https://t.bilibili.com/789637404135784453","md5":"76823069dd2cb8f77345cc795c2e229a","last_comment_bumped_at":"2023-07-30T12:44:38.108-04:00","rating":"g","image_width":500,"image_height":500,"tag_string":"1girl animated animated_gif beret black_headwear blush chibi chinese_commentary closed_mouth commentary_request dress expressionless flower hat hat_flower herta_(honkai:_star_rail) honkai:_star_rail honkai_(series) long_sleeves looping_animation lowres purple_flower seseren simple_background solo spinning transparent_background upper_body","fav_count":148,"file_ext":"gif","last_noted_at":null,"parent_id":null,"has_children":true,"approver_id":612007,"tag_count_general":18,"tag_count_artist":1,"tag_count_character":1,"tag_count_copyright":2,"file_size":119003,"up_score":155,"down_score":-3,"is_pending":false,"is_flagged":false,"is_deleted":false,"tag_count":28,"updated_at":"2023-05-14T06:02:44.362-04:00","is_banned":false,"pixiv_id":null,"last_commented_at":"2023-07-30T12:44:38.108-04:00","has_active_children":true,"bit_flags":0,"tag_count_meta":6,"has_large":false,"has_visible_children":true,"media_asset":{"id":12536469,"created_at":"2023-05-06T09:58:06.221-04:00","updated_at":"2023-05-06T09:58:08.987-04:00","md5":"76823069dd2cb8f77345cc795c2e229a","file_ext":"gif","file_size":119003,"image_width":500,"image_height":500,"duration":0.36,"status":"active","file_key":"NblQMdtCK","is_public":true,"pixel_hash":"76823069dd2cb8f77345cc795c2e229a","variants":[{"type":"180x180","url":"https://cdn.donmai.us/180x180/76/82/76823069dd2cb8f77345cc795c2e229a.jpg","width":180,"height":180,"file_ext":"jpg"},{"type":"360x360","url":"https://cdn.donmai.us/360x360/76/82/76823069dd2cb8f77345cc795c2e229a.jpg","width":360,"height":360,"file_ext":"jpg"},{"type":"720x720","url":"https://cdn.donmai.us/720x720/76/82/76823069dd2cb8f77345cc795c2e229a.webp","width":500,"height":500,"file_ext":"webp"},{"type":"original","url":"https://cdn.donmai.us/original/76/82/76823069dd2cb8f77345cc795c2e229a.gif","width":500,"height":500,"file_ext":"gif"}]},"tag_string_general":"1girl beret black_headwear blush chibi closed_mouth dress expressionless flower hat hat_flower long_sleeves purple_flower simple_background solo spinning transparent_background upper_body","tag_string_character":"herta_(honkai:_star_rail)","tag_string_copyright":"honkai:_star_rail honkai_(series)","tag_string_artist":"seseren","tag_string_meta":"animated animated_gif chinese_commentary commentary_request looping_animation lowres","file_url":"https://cdn.donmai.us/original/76/82/76823069dd2cb8f77345cc795c2e229a.gif","large_file_url":"https://cdn.donmai.us/original/76/82/76823069dd2cb8f77345cc795c2e229a.gif","preview_file_url":"https://cdn.donmai.us/180x180/76/82/76823069dd2cb8f77345cc795c2e229a.jpg"},
        {"approver_id": 604696, "bit_flags": 0, "created_at": "2023-04-13T09:04:53.028-04:00", "down_score": 0, "fav_count": 192, "file_ext": "png", "file_size": 10230754, "file_url": "https://cdn.donmai.us/original/74/bb/74bb69060b24bc3a34d7be95c4268d78.png", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6222225, "image_height": 3500, "image_width": 6222, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/74/bb/sample-74bb69060b24bc3a34d7be95c4268d78.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "74bb69060b24bc3a34d7be95c4268d78", "media_asset": {"created_at": "2023-04-13T09:00:28.148-04:00", "duration": null, "file_ext": "png", "file_key": "3HKzcYlXb", "file_size": 10230754, "id": 10185662, "image_height": 3500, "image_width": 6222, "is_public": true, "md5": "74bb69060b24bc3a34d7be95c4268d78", "pixel_hash": "f3baf3816085b1d7b61ca32b46ee44b7", "status": "active", "updated_at": "2023-04-13T09:00:34.136-04:00", "variants": [Array]},"parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/74/bb/74bb69060b24bc3a34d7be95c4268d78.jpg", "rating": "g", "score": 201, "source": "https://t.bilibili.com/770558381971734695", "tag_count": 29, "tag_count_artist": 0, "tag_count_character": 2, "tag_count_copyright": 2, "tag_count_general": 19, "tag_count_meta": 6, "tag_string": "2girls absurdres animal_ears blue_hair brown_hair chinese_commentary commentary_request food fox_ears fox_girl fox_tail green_eyes hair_ornament highres holding holding_food holding_spoon honkai:_star_rail honkai_(series) long_hair multiple_girls official_art partial_commentary ponytail purple_eyes spoon tail tingyun_(honkai:_star_rail) yukong_(honkai:_star_rail)", "tag_string_artist": "", "tag_string_character": "tingyun_(honkai:_star_rail) yukong_(honkai:_star_rail)", "tag_string_copyright": "honkai:_star_rail honkai_(series)", "tag_string_general": "2girls animal_ears blue_hair brown_hair food fox_ears fox_girl fox_tail green_eyes hair_ornament holding holding_food holding_spoon long_hair multiple_girls ponytail purple_eyes spoon tail", "tag_string_meta": "absurdres chinese_commentary commentary_request highres official_art partial_commentary", "up_score": 201, "updated_at": "2023-07-22T16:07:05.842-04:00", "uploader_id": 326777},
    ])
    const [selectedImg, setSelectedImg] = useState(
     
        {"approver_id": null, "bit_flags": 0, "created_at": "2023-12-15T04:56:06.946-05:00", "down_score": 0, "fav_count": 2, "file_ext": "jpg", "file_size": 1213172, "file_url": "https://cdn.donmai.us/original/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6983465, "image_height": 1600, "image_width": 1200, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": true, "large_file_url": "https://cdn.donmai.us/sample/02/1f/sample-021f5d1f19c98b0a314451f502fd4f80.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "021f5d1f19c98b0a314451f502fd4f80", "media_asset": {"created_at": "2023-12-15T04:52:53.817-05:00", "duration": null, "file_ext": "jpg", "file_key": "h0g9Z0Hwu", "file_size": 1213172, "id": 17665419, "image_height": 1600, "image_width": 1200, "is_public": true, "md5": "021f5d1f19c98b0a314451f502fd4f80", "pixel_hash": "a56a470f8362aaf8c58b4d34e76803ad", "status": "active", "updated_at": "2023-12-15T04:52:57.096-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "rating": "g", "score": 3, "source": "https://twitter.com/No23kappagatari/status/1734913650815819890", "tag_count": 29, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 1, "tag_count_general": 25, "tag_count_meta": 1, "tag_string": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat highres hijiri_byakuren jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace no23kappagatari puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo touhou white_background white_dress", "tag_string_artist": "no23kappagatari", "tag_string_character": "hijiri_byakuren", "tag_string_copyright": "touhou", "tag_string_general": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo white_background white_dress", "tag_string_meta": "highres", "up_score": 3, "updated_at": "2023-12-15T04:56:06.946-05:00", "uploader_id": 820653}
    );
    const [currentPostIndex, setCurrentPostIndex] = useState(0);
    const [currentOutput, setCurrentOutput] = useState(
         
        {"approver_id": null, "bit_flags": 0, "created_at": "2023-12-15T04:56:06.946-05:00", "down_score": 0, "fav_count": 2, "file_ext": "jpg", "file_size": 1213172, "file_url": "https://cdn.donmai.us/original/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6983465, "image_height": 1600, "image_width": 1200, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": true, "large_file_url": "https://cdn.donmai.us/sample/02/1f/sample-021f5d1f19c98b0a314451f502fd4f80.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "021f5d1f19c98b0a314451f502fd4f80", "media_asset": {"created_at": "2023-12-15T04:52:53.817-05:00", "duration": null, "file_ext": "jpg", "file_key": "h0g9Z0Hwu", "file_size": 1213172, "id": 17665419, "image_height": 1600, "image_width": 1200, "is_public": true, "md5": "021f5d1f19c98b0a314451f502fd4f80", "pixel_hash": "a56a470f8362aaf8c58b4d34e76803ad", "status": "active", "updated_at": "2023-12-15T04:52:57.096-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/02/1f/021f5d1f19c98b0a314451f502fd4f80.jpg", "rating": "g", "score": 3, "source": "https://twitter.com/No23kappagatari/status/1734913650815819890", "tag_count": 29, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 1, "tag_count_general": 25, "tag_count_meta": 1, "tag_string": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat highres hijiri_byakuren jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace no23kappagatari puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo touhou white_background white_dress", "tag_string_artist": "no23kappagatari", "tag_string_character": "hijiri_byakuren", "tag_string_copyright": "touhou", "tag_string_general": "1girl ajirogasa bead_necklace beads black_dress brown_hair cross-laced_clothes cross-laced_dress dress gradient_hair hat jewelry layered_dress long_hair looking_at_viewer multicolored_hair necklace puffy_short_sleeves puffy_sleeves purple_eyes purple_hair short_sleeves solo white_background white_dress", "tag_string_meta": "highres", "up_score": 3, "updated_at": "2023-12-15T04:56:06.946-05:00", "uploader_id": 820653}
    
    );
    const [lineart, setLineart] = useState({
        urls: [
            'https://cdn.donmai.us/sample/74/bb/sample-74bb69060b24bc3a34d7be95c4268d78.jpg',
            'https://cdn.donmai.us/sample/74/bb/sample-74bb69060b24bc3a34d7be95c4268d78.jpg'
        ],
        aspectRatio: 1
    });
    const [colors, setColors] = useState([[[[247,244,243],[63,55,87],[173,160,162]],"#f7f4f3"],[[[247,244,243],[63,55,87],[173,160,162]],"#3f3757"],[[[247,244,243],[63,55,87],[173,160,162]],"#ada0a2"]])
    const [colorModalVisible, setColorModalVisible] = useState(false);
    const [tagModalVisible, setTagModalVisible] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
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
    const postScrollContainer = useRef();



    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            backgroundColor: 'white',
            paddingTop: 50,
            paddingHorizontal: 20,
            height: undefined
        }}
        >
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 20, fontWeight: 100}}>Hello World</Text>
                <Text style={{fontSize: 20, fontWeight: 100}}>This is</Text>
                <Text style={{fontSize: 60, fontVariant: 'bold', fontWeight: 100}}>ArtAnalyzer</Text>
                <Text style={{fontSize: 15, fontWeight: 100}}>By FebryanShino</Text>
            </View>
            
            <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 50,
                gap: 5
            }}
            >
                <TextInput
                onChangeText={setTags}
                value={tags}
                style={{
                    flex: 2,
                    paddingLeft: 20,
                    fontSize: 20,
                    borderRadius: 25,
                    backgroundColor: 'hsl(0, 0%, 96%)',
                }}
                placeholder='Tags'
                />
                <TouchableOpacity
                onPress={ () => {
                    setFetching(true);
                    booru(tags, 10).then((data) => {
                        setPosts(data);
                        setSelectedImg(data[0]);
                        postScrollContainer.current.scrollTo({ x: 0, animated: true });
                        setFetching(false);
                }) }}
                style={{
                    backgroundColor: fetching ? 'red' : 'black',
                    height: '100%',
                    width: undefined,
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        fontWeight: 100,
                    }}>{tags ? '>': 'A'}</Text>
                </TouchableOpacity>
            </View>
            

            
            { posts && (
            <View style={{position: 'relative', borderRadius: 30, overflow: 'hidden', marginTop: 10, opacity: fetching ? 0 : 1}}>
                <View style={{backgroundColor: 'black', opacity: .5, width: '100%', height: '100%', zIndex: 998, position: 'absolute', pointerEvents: 'none'}}></View>
                <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    zIndex: 999,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: '10%',
                    gap: 5
                    }}
                >
                {posts.map( (post, index) => (
                    <Pressable
                    key={index}
                    onPress={ () => setSelectedImg(item) }
                    style={{
                        width: index === currentPostIndex ? 10 : 5,
                        height: undefined,
                        aspectRatio: index === currentPostIndex ? 1 : 2,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        opacity: index === currentPostIndex ? .8 : .3
                        }}
                    >
                    </Pressable>
                    ))}
                </View>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={ false }
                snapToInterval={width - 40}
                ref={postScrollContainer}
                onScroll={(event) => {
                    let index = Math.round(event.nativeEvent.contentOffset.x/(width - 40));
                    setCurrentPostIndex(index)
                    setSelectedImg(posts[index])
                }}
                style={{
                    aspectRatio: 16/9,
                    backgroundColor: 'white',
                    width: '100%',
                    aspectRatio: 16/12
                }}
                >
                    {posts.map( (item, index) => (
                    <Pressable
                    key={index}
                    onPress={ () => {
                        router.push({
                        pathname: 'image/' + index,
                        params: {
                            imageId: 'image_' + index.toString(),
                            url: item.large_file_url,
                            imgW: item.image_width,
                            imgH: item.image_height
                        }
                    }) 
                    }}
                    style={{flex: 2, width: '100%', height: undefined, aspectRatio: 16/12, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-start'}}
                    >
                        <Animated.Image
                        sharedTransitionTag={'image_' + index.toString()}
                        source={{ uri: item.large_file_url }}
                        style={{

                            width: '100%',
                            height: undefined,
                            aspectRatio: 16/12,
                            resizeMode: 'cover',
                            borderRadius: 30
                        }}
                        />
                    </Pressable>
                    ))}
                </ScrollView>
            </View>
            )}
            <Modal
            transparent={true}
            animationType="slide"
            visible={showFullImage}
            >
            <View style={{backgroundColor: 'black', opacity: .3, width: '100%', height: '100%', zIndex: -1, position: 'absolute', pointerEvents: 'none'}}></View>

                <View
                style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    alignSelf: 'center',
                    width: '95%',
                    height: undefined,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    position: 'relative',
                    gap: 5
                    
                }}
                >
                    <Pressable
                    onPress={ () => setShowFullImage(!showFullImage) }
                    style={{height: 40, backgroundColor: 'black', aspectRatio: 1, alignItems: 'center', justifyContent: 'center'}}
                    >
                    <Text style={{fontSize: 30, fontWeight: 100, color: 'white'}}>X</Text></Pressable>
                    <Image
                    source={{ uri: selectedImg.large_file_url }}
                    style={{ width: '100%', maxHeight: '100%', aspectRatio: selectedImg.image_width/selectedImg.image_height, resizeMode: 'cover'}}
                    />
                </View>

            </Modal>
            <View style={{
                    width: '100%',
                    height: undefined,
                    backgroundColor: 'hsl(0,0%,96%)',
                    borderRadius: 30,
                    justifyContent: 'flex-end',
                    padding: 10,
                    gap: 3,
                    marginTop: 10
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
                    <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: 35,
                        flex: 1,
                        gap: 5
                    }}
                    >
                        <TouchableOpacity
                        style={{
                            flex: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red',
                            borderRadius: 18
                            }}
                        onPress={ () => Alert.alert('Source', selectedImg.source) }
                        >
                            <Text style={{fontSize: 13, fontWeight: 200, color: 'white'}}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            flex: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red',
                            borderRadius: 18
                            }}
                        onPress={ () => Alert.alert('Source', selectedImg.source) }
                        >
                            <Text style={{fontSize: 13, fontWeight: 200, color: 'white'}}>W</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            flex: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red',
                            borderRadius: 18
                            }}
                        onPress={ () => Alert.alert('Source', selectedImg.source) }
                        >
                            <Text style={{fontSize: 13, fontWeight: 200, color: 'white'}}>S</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            <View style={{flex: 2, width: '100%', padding: 20}}>
                
            </View>
            
            <TouchableOpacity
            style={{
                marginTop: 10,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: analyzing ? 'white':'black',
                height: 50,
                width: '60%',
                alignSelf: 'center'
            }}
            disabled={analyzing}
            onPress={ () => {
                if (analyzing) {
                    Alert.alert('Alert', 'Currently analyzing, please wait...');
                    return;
                }
                setAnalyzing(true);
                cook(selectedImg.large_file_url).then(({ colors, lineart }) => {
                    setColors(colors);
                    setLineart(lineart);
                    setTagsData(selectedImg.tag_string_general.split(' '));
                    setCurrentOutput(selectedImg);
                    setAnalyzing(false);
                });
            }}
            >
                <Text style={{fontSize: 25, fontWeight: 100, color: analyzing ? 'black':'white'}}>{analyzing ? 'Analyzing...' : 'Analyze'}</Text>
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
                key={index}
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
                <ColorDetails data={colorData} visible={colorModalVisible} status={setColorModalVisible}></ColorDetails>
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
                key={index}
                style={styles.variation}
                onPress={() => router.push({
                    pathname: `/variations/${['Lineart', 'Lightness'][index]}`,
                    params: {
                        url: item,
                        ratio: lineart.aspectRatio,
                        colorPalette: JSON.stringify(colors[0][0]),
                        tag: ['Lineart', 'Lightness'][index]
                    }
                })}
                >
                    <Text style={{fontSize: 18, fontWeight: 100, marginBottom: 20}}>{['Lineart', 'Lightness'][index]}</Text>
                    <Animated.Image 
                    sharedTransitionTag={['Lineart', 'Lightness'][index]}
                    source={{uri: item}} style={{width: '100%', height: undefined, aspectRatio: 1}}/>
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
                marginTop: 10,
                marginBottom: 100
                }}>
                    { tagsData.map( (item, index) => (
                        <TouchableOpacity
                        key={index}
                        onPress={(async () => {
                            let tagUrl = `https://danbooru.donmai.us/wiki_pages/${item}.json`;
                            
                            let resTag = await fetch(tagUrl);
                            let dataTag = await resTag.json();
                            
                            
                            setTagWiki(dataTag);
                            setRelatedPosts('');
                            setTagModalVisible(!tagModalVisible);
                            let posts = []
                            for(let i = 0; i < 2; i++) {
                                let resPost = await fetch(`https://danbooru.donmai.us/posts/random.json?tags=${item}%20score:>100%20rating:g,s`);
                                let dataPost = await resPost.json();
                                posts.push(dataPost);
                            }
                            
                            
                            setRelatedPosts(posts);
                            
                            
                        } )}
                        style={{backgroundColor: 'hsl(0,0%, 95%)', padding: 5, minWidth: 50, alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Text style={{fontSize: 14, fontWeight: 200}}>{item}</Text>
                        </TouchableOpacity>
                        

                    ))
                    }
                </View>
                { tagModalVisible && (
                    <TagModal data={tagWiki} posts={relatedPosts} visible={tagModalVisible} status={setTagModalVisible}/>
                )}
            </View>
            </View>)}

            
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



// functions

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
    return data;
}

const cook = async (url) => {
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
    return {
        colors: colorArr,
        lineart: {urls: [content[0], content[2]], aspectRatio: content[3]}
    }
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