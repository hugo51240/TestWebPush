var push = require('web-push');

let sw = navigator.serviceWorker.ready;
let push2 = sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BHA6KBBYvqHcdljFv3OuHBlGMQBkJGaW_eXQz2TzOqlonpkIQNmHq-IOUeE4Sdtv-CoPnH4I50Ir3rfyTLxFF6c'
});


let vapidKey = {
    publicKey: 'BHA6KBBYvqHcdljFv3OuHBlGMQBkJGaW_eXQz2TzOqlonpkIQNmHq-IOUeE4Sdtv-CoPnH4I50Ir3rfyTLxFF6c',
    privateKey: 'UEtIIRWiVjB10V72coqFSO5SM_iisRTw8-ITz4BaJBk'
};


/*
push.setGCMAPIKey('AIzaSyBGbYWQMVNCrIIawj8yDH-LER12j2vIHpY');
push.setVapidDetails('mailto:test@test.com', vapidKey.publicKey, vapidKey.privateKey);
*/

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/eOvbUUtpw4M:APA91bE1_UKaW2SPSmFj0SklyKapL3Ci2TZ86JxkuS3kX5euVYEYkO4vPjh_gGVPvAThZ_xajQ4mON98RODbNOXAXHhduovEYCPb6l60Q0vIoXRRdmZLPz2BPYWsIeSbUBnUAaY-MJMS",
    expirationTime: true,
    keys: {
        p256dh: "BM-tN4OedjuKi-BiFZefTUvzsJJcsvAHNICfpDfdam3t__btQO2KV5k3J-HhtRFUoidot5vkcehrj67_LwZGRWE",
        auth: "z1La_cvtn_4d1JbEx5oeKA"
    }
};

let sbubis = {
    endpoint: push2.endpoint,
    expirationTime: push2.expirationTime,
    keys: {
        auth: push2.auth,
        p256dh: push2.p256dh
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
push.sendNotification(sbubis, payload, options);



