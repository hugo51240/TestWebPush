var push = require('web-push');

let vapidKey = {
    publicKey: 'BHA6KBBYvqHcdljFv3OuHBlGMQBkJGaW_eXQz2TzOqlonpkIQNmHq-IOUeE4Sdtv-CoPnH4I50Ir3rfyTLxFF6c',
    privateKey: 'UEtIIRWiVjB10V72coqFSO5SM_iisRTw8-ITz4BaJBk'
};


/*
push.setGCMAPIKey('AIzaSyBGbYWQMVNCrIIawj8yDH-LER12j2vIHpY');
push.setVapidDetails('mailto:test@test.com', vapidKey.publicKey, vapidKey.privateKey);
*/

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/eZ92FcfG1L8:APA91bFS9dUSKWVZFFg2c_dCPgjhUbXSKC5TvhsNWxALdBswrWIHu5S5ZaA7t55nQNkcYaDebqG65lcEZbASK3w-9qguz6NpvAu36Yk2YaKjhp1vAtTbKTFazXo7uDnOGIHfbnbSyKJq",
    expirationTime: true,
    keys: {
        p256dh: "BLOBNWDgJLCy3lXTp3_uuUjGoE3HCBsvsrJio9_JM_7RHPnEYjAXoQ1iPuCwtGn7_BiQQJZ66bHrlNAkslb8_rc",
        auth: "BLdT3xIrvXtAy5MHdSK0mQ"
    }
};



const payload = 'test message';

const options = {
    gcmAPIKey: 'AIzaSyBGbYWQMVNCrIIawj8yDH-LER12j2vIHpY',
    vapidDetails: {
        subject: 'mailto:test@test.com',
        publicKey: vapidKey.publicKey,
        privateKey: vapidKey.privateKey
    }
}

push.sendNotification(sub, payload, options);

