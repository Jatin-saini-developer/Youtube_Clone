const names = ['Aarav',  'Aarav', 'Isha', 'Kabir', 'Zara', 'Rohan', 'Anaya', 'Vihaan', 'Meera', 'Aryan', 'Diya',
  'Neha', 'Arjun', 'Priya', 'Rahul', 'Saanvi', 'Yash', 'Aditi', 'Karan', 'Tanya', 'Riya',
  'Dev', 'Sneha', 'Manav', 'Simran', 'Tushar', 'Pooja', 'Ishaan', 'Naina', 'Ved', 'Lavanya','Isha', 'Kabir', 'Zara', 'Rohan', 'Anaya', 'Vihaan', 'Meera', 'Aryan', 'Diya'];

 export const nameGenerator = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];}

  export const messages = [
  "What's going on here?",
  "Anyone watching the new series?",
  "Haha that’s funny 😂",
  "I totally agree!",
  "Bro, that’s crazy!",
  "Good vibes only ✨",
  "Any updates on the game?",
  "This is getting interesting!",
  "Can someone explain this?",
  "LOL I can't stop laughing",
  "Who's here from India?",
  "That’s so relatable.",
  "I need coffee ☕",
  "Who's online right now?",
  "Let's gooo!! 🔥",
  "Where are you guys from?",
  "Just joined, what did I miss?",
  "This chat is wild 😄",
  "Who’s your favorite player?",
  "I didn’t expect that ending!"
];
  
export const messages_generator = () => {
    const random = Math.floor(Math.random() * messages.length)
    return messages[random]
}
