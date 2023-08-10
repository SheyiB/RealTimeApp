const socket = new WebSocket('ws://localhost:8080');

//Listen for Messages
socket.onmessage = ({data}) => {
    console.log('New Bid!', data);
    
}