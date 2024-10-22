const emojiArray = [
    "😀", "😂", "😍", "🥳", "🤔", "🙄", "😎", "😭", 
    "😡", "🤯", "🥺", "🤖", "👽", "💀", "👻", "🎃", 
    "❤️", "🔥", "✨", "👍", "👎", "💪", "👏", "🙌", 
    "🙏", "💯", "✅", "❌", "🚀", "🌈", "⚡", "💥"
  ];
  

export const getRandomEmoji=()=> {
    let randomNumber = Math.floor(Math.random()*emojiArray.length);
    let emoji  = emojiArray[randomNumber];
    return emoji;
}
  