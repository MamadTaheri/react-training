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
                <div className="right floated content">
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
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
        <div className='ui container'>
           <div className="ui form">
               <div className="field">
                   <label>Enter search term</label>
                   <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)}/>
               </div>
           </div>
           <div className="ui list">
               {renderedResult}
           </div>
        </div>
    );
};

export default Search;