import "./styles/index.scss"

import {useQuery} from "react-query";
import Card from "./components/card";
import {Data} from "./components/card/interface";
import Sidebar from "./components/sidebar";

const App = () => {
    const {isLoading, error, data} = useQuery(
        'repoData',
        () =>
            fetch(
                'https://rickandmortyapi.com/api/character',
            ).then((response) => response.json())
                .then(data => data.results)
    );

    if (isLoading) return <p>Загрузка...</p>;

    if (error) { // @ts-ignore
        return <p>Ошибка: {error.message}</p>;
    }
    return (
        <div className="App">
            <Sidebar/>
            <div className="cards">
                {data.map((el: Data) =>
                    <Card data={el} key={el.id}/>)
                }
            </div>
        </div>
    );
}

export default App;
