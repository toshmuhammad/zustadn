import { useStore } from '../store/useStore';

export default function Column({ title, listName, nextList }) {
    const list = useStore((state) => state[listName]);
    const moveCard = useStore((state) => state.moveCard);

    return (
        <div style={{
            flex: 1,
            margin: '0 10px',
            padding: '10px',
            border: '2px solid gray',
            borderRadius: '8px',
            minHeight: '300px',
            backgroundColor: '#f9f9f9',
        }}>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            {list.map((card) => (
                <div
                    key={card.id}
                    onClick={() => {
                        if (nextList) moveCard(listName, nextList, card.id);
                    }}
                    style={{
                        backgroundColor: '#add8e6',
                        margin: '20px 0',
                        padding: '10px',
                        borderRadius: '10px',
                        cursor: nextList ? 'pointer' : 'default',
                        transition: 'all 0.2s',
                    }}
                >
                    <p>{card.text}</p>
                    <button style={{
                        backgroundColor: '#ffeb3b',
                        border: 'none',
                        padding: '5px',
                        borderRadius: '4px',
                        marginTop: '5px',
                        cursor: 'pointer',
                    }}>
                        Holati:
                    </button>
                </div>
            ))}
        </div>
    );
}
