export default function Card({ url, name, onClick }) {
    return (
        <div className='card' onClick={(e) => onClick(e.target.name)}>
            <img src={url} name={name} alt='pokemon' />
            <h2>{name}</h2>
        </div>
    );
}
