import React, { useEffect, useLayoutEffect } from "react";

const Landing = () => {

    console.log("Landing rendered")

    useLayoutEffect(() => {
        console.log("Landing useLayoutEffect");
    
        return () => {
          console.log("Landing useLayoutEffect cleanup");
        }
      }, []);
    
      useEffect(() => {
        console.log("Landing useEffect");
    
        return () => {
          console.log("Landing useEffect cleanup");
        }
      }, []);

    return (
        <div>
            Landing Page
        </div>
    );
};

export default Landing;