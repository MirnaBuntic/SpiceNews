export default function PlayAudio ({ soundFile }) {
    
    const playSound = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    return (
        <button onClick={playSound}>
        Spela ljud
        </button>
    );
}