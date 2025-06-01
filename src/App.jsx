import Column from './components/Column';

export default function App() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
        }}>
            <Column title="Boshlanmagan" listName="boshlanmagan" nextList="jarayonda" />
            <Column title="Jarayonda" listName="jarayonda" nextList="tugallangan" />
            <Column title="Tugallangan" listName="tugallangan" />
        </div>
    );
}
