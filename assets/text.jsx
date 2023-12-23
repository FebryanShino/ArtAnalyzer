const greetingText = (temp, hour) => {
    let currentTime;
    if (hour < 12) currentTime = 'morning';
    if (hour >= 12 && hour < 18) currentTime = 'afternoon';
    if (hour >= 18 && hour < 21) currentTime = 'evening';
    if (hour >= 21) currentTime = 'night';
    const situation = {
        COOL: [
            `おはようございます！今朝は気温が${temp}度で、ちょうど涼しい感じですね。爽やかな朝をお楽しみください！`,
            `こんにちは！今日の気温は${temp}度で、心地よい風が吹いています。外で過ごすには最適な気温ですね。`,
            `こんばんは。夕方になっても${temp}度で、外は心地よい涼しさです。夕涼みを楽しんでくださいね。`,
            `こんばんは。夜も${temp}度ありますが、夜風が心地よいですね。窓を開けて、涼しい夜をお楽しみください。`
        ],
        CHILL: [
            `おはようございます。今朝は気温が${temp}度で、まだまだ涼しい空気が残っていますね。穏やかな朝をお過ごしください。`,
            `こんにちは。今日は気温が${temp}度ですが、なんだか適度な涼しさがありますね。お昼休みをのんびりと過ごしましょう。`,
            `こんばんは。夕方になっても${temp}度ですが、風が心地よいですね。夕日とともに、ほっこりしたひとときをお過ごしください。`,
            `こんばんは。夜も${temp}度ありますが、夜風が心地よく、まさに涼やかな夜です。ぐっすり眠れるようにお休みください。`
        ],
        WARM: [
            `おはようございます！今朝は気温が${temp}度で、心地よい爽やかさですね。穏やかな朝の散歩でもいかがでしょうか？`,
            `こんにちは！今日の気温は${temp}度で、日差しが心地よいです。涼しい場所でランチを楽しんでみませんか？`,
            `こんばんは。夕方になっても${temp}度で、ほんのり温かさが残っています。外でゆっくり過ごしてみませんか？`,
            `こんばんは。夜も${temp}度で、心地よい夜風が吹いています。窓を開けて、涼しい夜をお楽しみください。`
        ],
        HOT: [
            `おはようございます！今朝は気温が${temp}度で、早くから暑さを感じますね。日中は涼しい場所で過ごしましょう！`,
            `こんにちは！今日は気温が${temp}度で、本当に暑いですね。涼しい飲み物を取りながら、クールダウンしましょう！`,
            `こんばんは。夕方になっても${temp}度ですね。夜涼しい場所でリラックスしましょう。`,
            `こんばんは。夜も${temp}度あるんですね。夜風に当たりながら、快適な夜をお過ごしください。`
        ]
    }


    const time = ['morning', 'afternoon', 'evening', 'night'];
    let currentTimeIndex = time.indexOf(currentTime)
    if (temp < 10) return situation.CHILL[currentTimeIndex]
    if (temp >= 10 && temp < 18) return situation.COOL[currentTimeIndex]
    if (temp >= 18 && temp < 27) return situation.WARM[currentTimeIndex]
    if (temp >= 27) return situation.HOT[currentTimeIndex]
}

export default greetingText;;