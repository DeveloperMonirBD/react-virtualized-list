import { loremIpsum } from 'lorem-ipsum';
import './App.css';
import ListItem from './components/ListItem';
import { List, AutoSizer } from 'react-virtualized';

function App() {
    const rowCount = 5000;
    // const listHeight = 500;
    const rowHeight = 50;
    // const rowWidth = 900;


    const list = Array(rowCount)
        .fill()
        .map((val, id) => {
            return {
                id,
                name: 'Monir',
                image: 'https://placehold.co/60',
                text: loremIpsum({
                    count: 1,
                    units: 'sentences',
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8
                })
            };
        });
    
    function renderRow({ index, key, style }) {
        return <ListItem key={key} image={list[index].image} name={list[index].name} text={list[index].text} style={style} />;

    }

    return (
        <>
            <div className="App">
                <div className="list">
                    <AutoSizer>{({ width, height }) =>
                        <List width={width} height={height} rowHeight={rowHeight} rowCount={rowCount} rowRenderer={renderRow} overscanColumnCount={5} />
                    }</AutoSizer>

                </div>
            </div>
        </>
    );
}

export default App;
