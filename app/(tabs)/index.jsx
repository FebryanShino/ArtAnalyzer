import { View, Text, TextInput, Button, Image, Alert, ScrollView, SafeAreaView, TouchableOpacity,
StyleSheet, Modal, Pressable, Dimensions } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Link, router } from 'expo-router';
import ColorDetails from '../../components/ColorModal'
import TagModal from '../../components/TagModal';



const home = () => {
    const { width, height } = Dimensions.get('screen');
    const COLORTYPE = ['Primary', 'Secondary', 'Accent'];

    const [analyzeStatus, setAnalyzeStatus] = useState('Analyze Image');
    const [tags, setTags] = useState('');
    const [posts, setPosts] = useState([
        {"approver_id": 604696, "bit_flags": 0, "created_at": "2023-04-13T09:04:53.028-04:00", "down_score": 0, "fav_count": 192, "file_ext": "png", "file_size": 10230754, "file_url": "https://cdn.donmai.us/original/74/bb/74bb69060b24bc3a34d7be95c4268d78.png", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6222225, "image_height": 3500, "image_width": 6222, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/74/bb/sample-74bb69060b24bc3a34d7be95c4268d78.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "74bb69060b24bc3a34d7be95c4268d78", "media_asset": {"created_at": "2023-04-13T09:00:28.148-04:00", "duration": null, "file_ext": "png", "file_key": "3HKzcYlXb", "file_size": 10230754, "id": 10185662, "image_height": 3500, "image_width": 6222, "is_public": true, "md5": "74bb69060b24bc3a34d7be95c4268d78", "pixel_hash": "f3baf3816085b1d7b61ca32b46ee44b7", "status": "active", "updated_at": "2023-04-13T09:00:34.136-04:00", "variants": [Array]},"parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/74/bb/74bb69060b24bc3a34d7be95c4268d78.jpg", "rating": "g", "score": 201, "source": "https://t.bilibili.com/770558381971734695", "tag_count": 29, "tag_count_artist": 0, "tag_count_character": 2, "tag_count_copyright": 2, "tag_count_general": 19, "tag_count_meta": 6, "tag_string": "2girls absurdres animal_ears blue_hair brown_hair chinese_commentary commentary_request food fox_ears fox_girl fox_tail green_eyes hair_ornament highres holding holding_food holding_spoon honkai:_star_rail honkai_(series) long_hair multiple_girls official_art partial_commentary ponytail purple_eyes spoon tail tingyun_(honkai:_star_rail) yukong_(honkai:_star_rail)", "tag_string_artist": "", "tag_string_character": "tingyun_(honkai:_star_rail) yukong_(honkai:_star_rail)", "tag_string_copyright": "honkai:_star_rail honkai_(series)", "tag_string_general": "2girls animal_ears blue_hair brown_hair food fox_ears fox_girl fox_tail green_eyes hair_ornament holding holding_food holding_spoon long_hair multiple_girls ponytail purple_eyes spoon tail", "tag_string_meta": "absurdres chinese_commentary commentary_request highres official_art partial_commentary", "up_score": 201, "updated_at": "2023-07-22T16:07:05.842-04:00", "uploader_id": 326777},
        {"approver_id": null, "bit_flags": 0, "created_at": "2023-04-27T01:15:27.500-04:00", "down_score": -1, "fav_count": 86, "file_ext": "png", "file_size": 15516350, "file_url": "https://cdn.donmai.us/original/90/3d/903db58c7eee117c2dd27c03fc98412b.png", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6259045, "image_height": 2483, "image_width": 2178, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/90/3d/sample-903db58c7eee117c2dd27c03fc98412b.jpg", "last_comment_bumped_at": "2023-04-27T01:20:44.868-04:00", "last_commented_at": "2023-05-14T18:30:44.040-04:00", "last_noted_at": null, "md5": "903db58c7eee117c2dd27c03fc98412b", "media_asset": {"created_at": "2023-04-27T00:02:20.081-04:00", "duration": null, "file_ext": "png", "file_key": "sbVvwAPgU", "file_size": 15516350, "id": 11734333, "image_height": 2483, "image_width": 2178, "is_public": true, "md5": "903db58c7eee117c2dd27c03fc98412b", "pixel_hash": "c87893d0555e761be2eaca3e8ccbd96f", "status": "active", "updated_at": "2023-04-27T00:02:24.143-04:00", "variants": [Array]}, "parent_id": null, "pixiv_id": 107565110, "preview_file_url": "https://cdn.donmai.us/180x180/90/3d/903db58c7eee117c2dd27c03fc98412b.jpg", "rating": "g", "score": 107, "source": "https://i.pximg.net/img-original/img/2023/04/27/13/00/55/107565110_p0.png", "tag_count": 42, "tag_count_artist": 1, "tag_count_character": 2, "tag_count_copyright": 2, "tag_count_general": 33, "tag_count_meta": 4, "tag_string": "1girl absurdres bow bowtie brown_hair cat_tail chen commentary cosplay crossover death film_grain flat_chest from_above highres indoors lying minecraft minecraft_sword multiple_tails nekomata nyztsune on_back on_floor photo-referenced red_skirt red_vest short_hair sidelighting skirt skirt_set solo stairs steve_(minecraft) steve_(minecraft)_(cosplay) tail touhou two_tails vest what white_bow white_bowtie", "tag_string_artist": "nyztsune", "tag_string_character": "chen steve_(minecraft)", "tag_string_copyright": "minecraft touhou", "tag_string_general": "1girl bow bowtie brown_hair cat_tail cosplay crossover death film_grain flat_chest from_above indoors lying minecraft_sword multiple_tails nekomata on_back on_floor red_skirt red_vest short_hair sidelighting skirt skirt_set solo stairs steve_(minecraft)_(cosplay) tail two_tails vest what white_bow white_bowtie", "tag_string_meta": "absurdres commentary highres photo-referenced", "up_score": 108, "updated_at": "2023-10-31T19:27:45.699-04:00", "uploader_id": 927451}, {"approver_id": null, "bit_flags": 0, "created_at": "2023-04-05T07:53:55.792-04:00", "down_score": 0, "fav_count": 103, "file_ext": "jpg", "file_size": 118313, "file_url": "https://cdn.donmai.us/original/87/8d/878d1f758a17b2177b1bfd5ff0204a6e.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6200703, "image_height": 1794, "image_width": 1032, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/87/8d/sample-878d1f758a17b2177b1bfd5ff0204a6e.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "878d1f758a17b2177b1bfd5ff0204a6e", "media_asset": {"created_at": "2023-04-05T07:52:19.015-04:00", "duration": null, "file_ext": "jpg", "file_key": "4oXddn3Z5", "file_size": 118313, "id": 9626833, "image_height": 1794, "image_width": 1032, "is_public": true, "md5": "878d1f758a17b2177b1bfd5ff0204a6e", "pixel_hash": "d4bcc7be8d6ced01a8baa03dbace483c", "status": "active", "updated_at": "2023-04-05T07:52:22.155-04:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/87/8d/878d1f758a17b2177b1bfd5ff0204a6e.jpg", "rating": "g", "score": 105, "source": "https://twitter.com/imlllsn/status/1643581298630606850", "tag_count": 43, "tag_count_artist": 1, "tag_count_character": 0, "tag_count_copyright": 1, "tag_count_general": 40, "tag_count_meta": 1, "tag_string": "1girl arm_under_breasts black_necktie blush boots breasts convenient_leg cross-laced_footwear desk foreshortening from_below hand_up high_heel_boots high_heels highres knee_up looking_at_viewer looking_down medium_breasts miniskirt multicolored_eyes multicolored_hair necktie ohisashiburi open_mouth original pale_skin parted_lips pleated_skirt red_eyes school_desk shirt shoe_soles short_hair sitting skirt solo streaked_hair white_background white_eyes white_hair white_shirt wing_collar", "tag_string_artist": "ohisashiburi", "tag_string_character": "", "tag_string_copyright": "original", "tag_string_general": "1girl arm_under_breasts black_necktie blush boots breasts convenient_leg cross-laced_footwear desk foreshortening from_below hand_up high_heel_boots high_heels knee_up looking_at_viewer looking_down medium_breasts miniskirt multicolored_eyes multicolored_hair necktie open_mouth pale_skin parted_lips pleated_skirt red_eyes school_desk shirt shoe_soles short_hair sitting skirt solo streaked_hair white_background white_eyes white_hair white_shirt wing_collar", "tag_string_meta": "highres", "up_score": 105, "updated_at": "2023-04-05T08:33:54.384-04:00", "uploader_id": 21757}, {"approver_id": 463832, "bit_flags": 2, "created_at": "2019-05-05T06:01:13.551-04:00", "down_score": 0, "fav_count": 190, "file_ext": "jpg", "file_size": 534533, "file_url": "https://cdn.donmai.us/original/03/5d/035d6422424f6455537c0b982ef388ff.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 3498610, "image_height": 4096, "image_width": 2681, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/03/5d/sample-035d6422424f6455537c0b982ef388ff.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "035d6422424f6455537c0b982ef388ff", "media_asset": {"created_at": "2019-05-05T06:01:13.551-04:00", "duration": null, "file_ext": "jpg", "file_key": "ghfrxtSLV", "file_size": 534533, "id": 3465125, "image_height": 4096, "image_width": 2681, "is_public": true, "md5": "035d6422424f6455537c0b982ef388ff", "pixel_hash": "8976ab3cf51a126e5a1ef870959adaa2", "status": "active", "updated_at": "2023-02-27T12:51:14.086-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/03/5d/035d6422424f6455537c0b982ef388ff.jpg", "rating": "g", "score": 138, "source": "https://twitter.com/udon0531/status/1124880878901948416", "tag_count": 27, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 2, "tag_count_general": 20, "tag_count_meta": 3, "tag_string": "1girl absurdres bare_shoulders black_bow black_hairband blush bow brown_eyes brown_hair closed_mouth commentary dress forehead hair_bow hairband highres idolmaster idolmaster_(classic) long_hair looking_at_viewer minase_iori simple_background smile solo swept_bangs upper_body yamamoto_souichirou", "tag_string_artist": "yamamoto_souichirou", "tag_string_character": "minase_iori", "tag_string_copyright": "idolmaster idolmaster_(classic)", "tag_string_general": "1girl bare_shoulders black_bow black_hairband blush bow brown_eyes brown_hair closed_mouth dress forehead hair_bow hairband long_hair looking_at_viewer simple_background smile solo swept_bangs upper_body", "tag_string_meta": "absurdres commentary highres", "up_score": 138, "updated_at": "2023-03-14T10:53:40.322-04:00", "uploader_id": 109167}, {"approver_id": null, "bit_flags": 0, "created_at": "2010-10-21T01:38:38.699-04:00", "down_score": 0, "fav_count": 293, "file_ext": "gif", "file_size": 342588, "file_url": "https://cdn.donmai.us/original/7a/eb/7aebc7350b5f3422e749103e9ca241d7.gif", "has_active_children": true, "has_children": true, "has_large": false, "has_visible_children": true, "id": 772833, "image_height": 370, "image_width": 400, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/original/7a/eb/7aebc7350b5f3422e749103e9ca241d7.gif", "last_comment_bumped_at": "2013-03-12T10:30:56.685-04:00", "last_commented_at": "2013-03-12T10:30:56.685-04:00", "last_noted_at": "2015-04-03T18:38:49.101-04:00", "md5": "7aebc7350b5f3422e749103e9ca241d7", "media_asset": {"created_at": "2010-10-21T01:38:38.699-04:00", "duration": 1.02, "file_ext": "gif", "file_key": "BITfuNspC", "file_size": 342588, "id": 745318, "image_height": 370, "image_width": 400, "is_public": true, "md5": "7aebc7350b5f3422e749103e9ca241d7", "pixel_hash": "7aebc7350b5f3422e749103e9ca241d7", "status": "active", "updated_at": "2023-02-24T14:03:47.233-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/7a/eb/7aebc7350b5f3422e749103e9ca241d7.jpg", "rating": "g", "score": 130, "source": "http://www.maitora.net/souko/momizi_m.gif", "tag_count": 28, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 1, "tag_count_general": 21, "tag_count_meta": 4, "tag_string": "1girl :3 animal_ears animated animated_gif blush chibi detached_sleeves full_body grey_hair hat inubashiri_momiji letterboxed looping_animation lowres maitora red_eyes short_hair simple_background solo swaying tail tokin_hat touhou v-shaped_eyebrows white_background wolf_ears wolf_tail", "tag_string_artist": "maitora", "tag_string_character": "inubashiri_momiji", "tag_string_copyright": "touhou", "tag_string_general": "1girl :3 animal_ears blush chibi detached_sleeves full_body grey_hair hat letterboxed red_eyes short_hair simple_background solo swaying tail tokin_hat v-shaped_eyebrows white_background wolf_ears wolf_tail", "tag_string_meta": "animated animated_gif looping_animation lowres", "up_score": 116, "updated_at": "2022-06-18T15:49:36.297-04:00", "uploader_id": 32251}, {"approver_id": 131474, "bit_flags": 0, "created_at": "2022-10-18T14:11:56.773-04:00", "down_score": 0, "fav_count": 101, "file_ext": "png", "file_size": 3853651, "file_url": "https://cdn.donmai.us/original/93/27/9327f9ba740fa752e096c56f2193a0e6.png", "has_active_children": true, "has_children": true, "has_large": true, "has_visible_children": true, "id": 5756847, "image_height": 2177, "image_width": 3014, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/93/27/sample-9327f9ba740fa752e096c56f2193a0e6.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "9327f9ba740fa752e096c56f2193a0e6", "media_asset": {"created_at": "2022-10-18T14:08:58.758-04:00", "duration": null, "file_ext": "png", "file_key": "cj9u1kVva", "file_size": 3853651, "id": 6898091, "image_height": 2177, "image_width": 3014, "is_public": true, "md5": "9327f9ba740fa752e096c56f2193a0e6", "pixel_hash": "dda8dc59ccd6dd2bdb5c52fd9a96cbd4", "status": "active", "updated_at": "2023-03-04T02:45:45.453-05:00", "variants": [Array]}, "parent_id": null, "pixiv_id": 102053777, "preview_file_url": "https://cdn.donmai.us/180x180/93/27/9327f9ba740fa752e096c56f2193a0e6.jpg", "rating": "g", "score": 104, "source": "https://i.pximg.net/img-original/img/2022/10/19/03/06/08/102053777_p0.png", "tag_count": 31, "tag_count_artist": 1, "tag_count_character": 1, "tag_count_copyright": 2, "tag_count_general": 26, "tag_count_meta": 1, "tag_string": "!? 1girl blue_hair blue_skin colored_sclera colored_skin comic cup cyberpunk_(series) cyberpunk_edgerunners disposable_cup drinking_straw english_text highres ice ice_cube long_hair looking_at_another nagainosfw neck_tattoo oversized_forearms oversized_limbs pink_tattoo raised_eyebrow rebecca_(cyberpunk) red_sclera signature speech_bubble sweatdrop tattoo twintails", "tag_string_artist": "nagainosfw", "tag_string_character": "rebecca_(cyberpunk)", "tag_string_copyright": "cyberpunk_(series) cyberpunk_edgerunners", "tag_string_general": "!? 1girl blue_hair blue_skin colored_sclera colored_skin comic cup disposable_cup drinking_straw english_text ice ice_cube long_hair looking_at_another neck_tattoo oversized_forearms oversized_limbs pink_tattoo raised_eyebrow red_sclera signature speech_bubble sweatdrop tattoo twintails", "tag_string_meta": "highres", "up_score": 104, "updated_at": "2022-10-19T15:56:33.800-04:00", "uploader_id": 945637}, {"approver_id": null, "bit_flags": 0, "created_at": "2023-05-04T16:28:03.106-04:00", "down_score": 0, "fav_count": 107, "file_ext": "jpg", "file_size": 1559599, "file_url": "https://cdn.donmai.us/original/b9/18/b91822f35f9d1a6830d1b132c410385e.jpg", "has_active_children": false, "has_children": false, "has_large": true, "has_visible_children": false, "id": 6280424, "image_height": 3297, "image_width": 2257, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/sample/b9/18/sample-b91822f35f9d1a6830d1b132c410385e.jpg", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "b91822f35f9d1a6830d1b132c410385e", "media_asset": {"created_at": "2023-05-04T16:24:57.327-04:00", "duration": null, "file_ext": "jpg", "file_key": "IBPvRBWtM", "file_size": 1559599, "id": 12393997, "image_height": 3297, "image_width": 2257, "is_public": true, "md5": "b91822f35f9d1a6830d1b132c410385e", "pixel_hash": "d07624043a553d9e754e635f1e292597", "status": "active", "updated_at": "2023-05-04T16:25:01.773-04:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/b9/18/b91822f35f9d1a6830d1b132c410385e.jpg", "rating": "g", "score": 113, "source": "https://t.bilibili.com/791898708665958401", "tag_count": 52, "tag_count_artist": 1, "tag_count_character": 3, "tag_count_copyright": 2, "tag_count_general": 43, "tag_count_meta": 3, "tag_string": "2girls absurdres beret black_dress black_footwear black_gloves black_headwear black_jacket black_skirt closed_mouth commentary_request dancing doll_joints dress expressionless flower full_body gloves grey_hair hat hat_flower herta_(honkai:_star_rail) high_heels highres holding_hands honkai:_star_rail honkai_(series) jacket joints light_brown_hair long_hair long_sleeves looking_at_another multiple_girls open_clothes open_jacket purple_eyes purple_flower shirt skirt stelle_(honkai:_star_rail) thigh_strap trailblazer_(honkai:_star_rail) two-sided_fabric two-sided_jacket very_long_hair white_background white_dress white_shirt yajuu yellow_eyes yellow_jacket", "tag_string_artist": "yajuu", "tag_string_character": "herta_(honkai:_star_rail) stelle_(honkai:_star_rail) trailblazer_(honkai:_star_rail)", "tag_string_copyright": "honkai:_star_rail honkai_(series)", "tag_string_general": "2girls beret black_dress black_footwear black_gloves black_headwear black_jacket black_skirt closed_mouth dancing doll_joints dress expressionless flower full_body gloves grey_hair hat hat_flower high_heels holding_hands jacket joints light_brown_hair long_hair long_sleeves looking_at_another multiple_girls open_clothes open_jacket purple_eyes purple_flower shirt skirt thigh_strap two-sided_fabric two-sided_jacket very_long_hair white_background white_dress white_shirt yellow_eyes yellow_jacket", "tag_string_meta": "absurdres commentary_request highres", "up_score": 113, "updated_at": "2023-05-04T16:32:40.756-04:00", "uploader_id": 827810}, {"approver_id": 913940, "bit_flags": 0, "created_at": "2023-09-06T07:34:07.119-04:00", "down_score": 0, "fav_count": 87, "file_ext": "png", "file_size": 316966, "file_url": "https://cdn.donmai.us/original/db/42/db42dbf23af4160471b6c0f749479c3b.png", "has_active_children": false, "has_children": false, "has_large": false, "has_visible_children": false, "id": 6660239, "image_height": 900, "image_width": 800, "is_banned": false, "is_deleted": false, "is_flagged": false, "is_pending": false, "large_file_url": "https://cdn.donmai.us/original/db/42/db42dbf23af4160471b6c0f749479c3b.png", "last_comment_bumped_at": null, "last_commented_at": null, "last_noted_at": null, "md5": "db42dbf23af4160471b6c0f749479c3b", "media_asset": {"created_at": "2023-09-06T07:31:52.897-04:00", "duration": null, "file_ext": "png", "file_key": "DuvTgvMIh", "file_size": 316966, "id": 13916528, "image_height": 900, "image_width": 800, "is_public": true, "md5": "db42dbf23af4160471b6c0f749479c3b", "pixel_hash": "c68197120f50d72a47df8a30612e34e8", "status": "active", "updated_at": "2023-09-06T07:31:55.399-04:00", "variants": [Array]}, "parent_id": null, "pixiv_id": null, "preview_file_url": "https://cdn.donmai.us/180x180/db/42/db42dbf23af4160471b6c0f749479c3b.jpg", "rating": "g", "score": 104, "source": "https://twitter.com/notmicid/status/1699379953916383312", "tag_count": 38, "tag_count_artist": 1, "tag_count_character": 2, "tag_count_copyright": 2, "tag_count_general": 31, "tag_count_meta": 2, "tag_string": "1girl blue_sky blurry commentary english_commentary field flower flower_field flower_pot formicid hair_flower hair_ornament holding holding_flower_pot kazami_yuuka looking_at_viewer medium_hair multicolored_flower necktie outdoors peashooter_(plants_vs_zombies) plaid plaid_vest plant plants_vs_zombies potted_plant red_eyes shirt short_sleeves sky smile solo sunflower touhou vest wavy_hair white_shirt yellow_necktie", "tag_string_artist": "formicid", "tag_string_character": "kazami_yuuka peashooter_(plants_vs_zombies)", "tag_string_copyright": "plants_vs_zombies touhou", "tag_string_general": "1girl blue_sky blurry field flower flower_field flower_pot hair_flower hair_ornament holding holding_flower_pot looking_at_viewer medium_hair multicolored_flower necktie outdoors plaid plaid_vest plant potted_plant red_eyes shirt short_sleeves sky smile solo sunflower vest wavy_hair white_shirt yellow_necktie", "tag_string_meta": "commentary english_commentary", "up_score": 104, "updated_at": "2023-09-10T22:12:32.737-04:00", "uploader_id": 940035}]);
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

        postScrollContainer.current.scrollTo({ x: 0, animated: true });
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
        console.log(JSON.stringify(colorArr))
        setLineart({urls: [content[0], content[2]], aspectRatio: content[3]});
        setTagsData(selectedImg.tag_string_general.split(' '));
        setCurrentOutput(selectedImg);
        setAnalyzeStatus('Analyze Image');
    }


    

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
                onPress={ () => booru(tags, 10) }
                style={{
                    backgroundColor: 'black',
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
            

            
            {posts && (
            <View style={{position: 'relative', borderRadius: 30, overflow: 'hidden', marginTop: 10}}>
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
                    backgroundColor: 'red',
                    width: '100%',
                    aspectRatio: 16/12
                }}
                >
                    {posts.map( item => (
                    <Pressable
                    onPress={ () => setShowFullImage(!showFullImage) }
                    >
                        <Image
                            source={{ uri: item.large_file_url }}
                            style={{ flex: 2, width: '100%', height: undefined, aspectRatio: 16/12, resizeMode: 'cover'}}
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
                marginTop: 10,
                marginBottom: 50
                }}>
                    { tagsData.map( (item) => (
                        <TouchableOpacity
                        onPress={(async () => {
                            let tagUrl = `https://danbooru.donmai.us/wiki_pages/${item}.json`;
                            
                            let resTag = await fetch(tagUrl);
                            let dataTag = await resTag.json();
                            
                            setTagWiki(dataTag);
                            let resPost = await fetch(`https://danbooru.donmai.us/posts.json?tags=${item}&limit=2`);
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