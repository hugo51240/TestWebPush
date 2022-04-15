var push = require('web-push');

let vapidKey = {
    publicKey: 'BHA6KBBYvqHcdljFv3OuHBlGMQBkJGaW_eXQz2TzOqlonpkIQNmHq-IOUeE4Sdtv-CoPnH4I50Ir3rfyTLxFF6c',
    privateKey: 'UEtIIRWiVjB10V72coqFSO5SM_iisRTw8-ITz4BaJBk'
  };

push.setVapidDetails('mailto:test@test.com', vapidKey.publicKey, vapidKey.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/f7xzQNCH5bo:APA91bGTNo1DdsBU9CU0lfIAKf0e6aNPWMRfQslZEesYc6j0yJBxKYJknfDJNbFgo1mR3emdyyBUsed5CpDgja2_I8L0laDlXCZntLSf-_q0rMlJPODEacAzKYKSfZOGMU5SfklMRP-I",
    expirationTime:null,
    keys: {
        p256dh:"BEuYqEMU6UPMXGR0NrKDgbCY8JzwHyXscxD27BJWbbxUoDwAmFS-kRJSudxzadXmj_Gh7GSRnTbDaIFd7UnDzXc",
        auth:"nMBjwsuqvKqCk3UwRe6jJw"
    }
};

push.sendNotification(sub, 'test message');