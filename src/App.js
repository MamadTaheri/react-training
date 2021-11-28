import React from 'react';
import SiteLayout from "./components/SiteLayout";

const App = () => {
    return (
         <SiteLayout menu={<p>Menu</p>}>
             <>
                 <div className="callout">Callout</div>
                 <h1>Contents</h1>
                 <p>This is the main part of the example layout</p>
             </>
         </SiteLayout>
    );
};

export default App;