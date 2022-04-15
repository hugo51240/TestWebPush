var push = require('web-push');

let vapidKey = {
    publicKey: 'BHA6KBBYvqHcdljFv3OuHBlGMQBkJGaW_eXQz2TzOqlonpkIQNmHq-IOUeE4Sdtv-CoPnH4I50Ir3rfyTLxFF6c',
    privateKey: 'UEtIIRWiVjB10V72coqFSO5SM_iisRTw8-ITz4BaJBk'
  };

push.setVapidDetails('mailto:test@test.com', vapidKey.publicKey, vapidKey.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');