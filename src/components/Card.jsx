export default function Card({ url, name, onClick }) {
    return (
        <div className='card' onClick={(e) => onClick(e.target.name)}>
            <h2>{name}</h2>
            <img src={url} name={name} alt='pokemon' />
        </div>
    );
}
