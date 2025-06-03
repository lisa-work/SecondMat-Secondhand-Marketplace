import axios from "axios";

const SendBirdApplicationId=import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken=import.meta.env.VITE_SENDBIRD_API_TOKEN

const FormatResult = (resp) => {
    const result = {};
    const finalResult = [];

    resp.forEach((item) => {
        const listingId = item.Listing?.id;
        if (!result[listingId]) {
            result[listingId] = {
                itemName: item.Listing,
                images: []
            };
        }
        if (item.Images) {
            result[listingId].images.push(item.Images);
        }
    });

    Object.values(result).forEach((item) => {
        finalResult.push({
            ...item.itemName,
            images: item.images
        });
    });

    return finalResult.sort((a, b) => a.sellingPrice - b.sellingPrice);
};

const CreateSendBirdUser=(userId, nickName, profileUrl)=> {
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users', {
        user_id: userId,
        nickname: nickName,
        profile_url: profileUrl,
        issue_access_token: false
    }, {
        headers:{
            'Content-Type': 'application/json',
            'Api-Token': SendBirdApiToken
        }
    });
}

const CreateSendBirdChannel=(users, title)=>{
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels', {
        user_ids: users,
        is_distinct: true,
        name: title,

    }, {
        headers:{
            'Content-Type': 'application/json',
            'Api-Token': SendBirdApiToken
        }
    })
}
export default {
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}