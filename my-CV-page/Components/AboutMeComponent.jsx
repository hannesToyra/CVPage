import { useEffect, useState } from "react";

export const AboutMeComponent = () => {
    const cookingEmojis = ['🍳', '🍲', '🍕'];
    const trainingEmojis = ['🏃', '🏋️'];
    const otherInterestsEmojis = ['fotboll ⚽', 'F1 🏎️', 'hockey 🏒']

    const [cookingEmojiIndex, setCookingEmoji] = useState(0);
    const [trainingEmojiIndex, setTrainingEmoji] = useState(0)
    const [otherInterestsIndex, setOtherInterests] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCookingEmoji((prev) => (prev + 1) % cookingEmojis.length);
        setTrainingEmoji((prev) => (prev + 1) % trainingEmojis.length);
        setOtherInterests((prev) => (prev + 1) % otherInterestsEmojis.length)
    }, 3000);

    return () => clearInterval(interval); // Rensar intervallet när komponenten avmonteras
}, [trainingEmojis.length, cookingEmojis.length, otherInterestsEmojis.length]);

    return (
    <>
        <p> På fritiden tycker jag om att träna {trainingEmojis[trainingEmojiIndex]} och att laga diverse olika maträtter {cookingEmojis[cookingEmojiIndex]}. 
        Utöver det är jag också intresserad av {otherInterestsEmojis[otherInterestsIndex]}</p>
    </>
)
}