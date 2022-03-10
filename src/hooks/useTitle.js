import React, { useEffect } from 'react';

const useTitle = (_title) => {
     useEffect(() => {
         document.title = _title; 
     }, [])
};

export default useTitle;