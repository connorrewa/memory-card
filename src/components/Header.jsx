export default function Header({ score, bestScore }) {
    return (
        <header>
            <div id='header'>
                <h1>Pokemon Memory Game</h1>
                <div id='scores'>
                    <h2>Score: {score}</h2>
                    <h2>Best Score: {bestScore}</h2>
                </div>
            </div>
            <p>Select as many different pokemon as your brain can handle!</p>
        </header>
    );
}
