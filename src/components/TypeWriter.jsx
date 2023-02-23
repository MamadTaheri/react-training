import React from "react";

const defaultText = "Hello World. This is the sample Text For TypeWriter Effect.";
const defaultSpeed = 100;
const defaultLog = false;

const TypeWriter = ({ text = defaultText, speed = defaultSpeed, log = defaultLog }) => {
   const textLength = text.length;
   const [currentText, setCurrentText] = React.useState("");
   const [currentIndex, setCurrentIndex] = React.useState(0);
   if (log) {
      console.log({ currentText });
   }

   useEffect(() => {
      let timer;
      if (currentIndex < textLength) {
         timer = setTimeout(() => {
            setCurrentText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
         }, 5000 / speed);
      }

      return () => {
         clearTimeout(timer);
      };
   }, [currentIndex, text]);

   return (<div>{currentText}</div>);
};

export default TypeWriter;
