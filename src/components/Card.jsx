export default function Card({ url, key, name }) {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={url} alt='pokemon' />
        </div>
    );
}
