import React , {useState,useEffect} from 'react';
import { useMemo } from 'react';
import axios from 'axios';

const Convert = ({langauge , text}) => {
   const [translated , setTranslated] = useState('');
   const [debounceddText, setDebounced] = useState(text);
   useEffect (()=> {

      const timerId = setTimeout(() => {
         setDebounced(text);
      },500);

      return () => {
         clearTimeout(timerId);
      };

   },[text]);
   useEffect(() => {

      const doTranslation = async () => {
       const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
         {params: {
               q:debounceddText,
               target: langauge.value,
               key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
         }
         );
         setTranslated(data.data.translations[0].translatedText);
      };
      doTranslation();
   },[langauge , debounceddText]);
   
   
   return( <div>
     <h1>{translated}</h1>
    </div>
   );
};
export default Convert;
