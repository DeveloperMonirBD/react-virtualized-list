import { loremIpsum } from 'lorem-ipsum';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  const rowCount = 5000;
  const list = Array(rowCount).fill()
    .map((val, id) => {
    return {
      id,
      name: "Monir",
      image: "https://placehold.co/60",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    }
})


    return (
        <>
            <div className="App">
                <div className="list">
                    {list.map(item => (
                      <ListItem
                        key={item.id}
                        image={item.image} name={item.name} text={item.text} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
