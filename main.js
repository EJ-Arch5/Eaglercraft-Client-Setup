let currentRelayIndex = 0;
let relays = [];

fetch('relays.json').then(r => r.json()).then(data => {
    relays = data;
    connectToRelay(relays[currentRelayIndex]);
});

function connectToRelay(url) {
    let ws = new WebSocket(url.replace('wss', 'ws'));
    ws.onopen = () => console.log('Connected to relay: ' + url);
    ws.onmessage = e => console.log('Message: ' + e.data);
    ws.onclose = () => console.log('Disconnected');
}