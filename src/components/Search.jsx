import axios from 'axios';
import { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    if(results.length) {
        console.log(results);
    }

    useEffect(() => {
        const search = async () => {
            const { data } =await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        }
        
        search();
    }, [term])

    const renderedResult = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <h1>
           <div className="ui form">
               <div className="field">
                   <label>Enter search term</label>
                   <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)}/>
               </div>
           </div>
           <div className="ui list">
               {renderedResult}
           </div>
        </h1>
    );
};

export default Search;