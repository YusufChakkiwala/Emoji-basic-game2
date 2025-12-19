const emojis=[
    {symbol: '😀', mood: 'Happy',color:"pink"},
    {symbol: '😢', mood: 'Sad',color:"blue"},
    {symbol: '😠', mood: 'Angry',color:"red"},
    {symbol: '😱', mood: 'Scared',color:"yellow"},
    {symbol: '😎', mood: 'Cool',color:"green"},
    {symbol: '😴', mood: 'Sleepy',color:"purple"},
    {symbol: '🤔', mood: 'Thinking',color:"orange"},
];
const container = document.getElementById('emoji-container');
const message= document.getElementById('mood-message');
//Generate emojis usiing a loop
for( let i=0; i<emojis.length; i++){
    const emoji=document.createElement("div");
    emoji.className = 'emoji';
    emoji.textContent= emojis[i].symbol;
    emoji.onclick = function() {
        showMood(emojis [i]);
    };
    container.appendChild(emoji);
}
   function showMood(emojiObj){
    switch(emojiObj.mood) {
        case 'Happy':
            message.textContent = "Yes very Good always be happy";
            break;
        case 'Sad':
            message.textContent = "Why?? then call me fast ";
            break;
        case 'Angry':
            message.textContent = "Abb kya kiya maine??";
            break;
        case 'Scared':
            message.textContent = "Don't be afraid, I'm here!";
            break;
        case 'Cool':
            message.textContent = "you are always cool!";
            break;
        case 'Sleepy':
            message.textContent = "sojaa sojaa sodtu";
            break;
        case 'Thinking':
            message.textContent = "Kiske mere khyaalo me hein?";
            break;
        default:
            message.textContent = `Your mood is: ${emojiObj.mood}`;
    }
    document.body.style.backgroundColor = emojiObj.color;
   }
