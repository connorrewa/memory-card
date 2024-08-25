export default function Header({ score, bestScore }) {
    return (
        <div id='header'>
            <h1>Memory Game</h1>
            <h2>Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>
        </div>
    );
}
