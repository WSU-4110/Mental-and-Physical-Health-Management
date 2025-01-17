import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
export default function TextGeneratorEffect({text, speed = 100, style}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style = {style} >{displayedText}</Text>;
}
