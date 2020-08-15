import React , {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Russian',
        value: 'Ru'
    },
    {
        label: 'Bengali',
        value: 'bn'
    },
    {
        label: 'Dutch',
        value: 'n1'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Japanese',
        value: 'jn'
    }
];
const Translate = () => {
const [language,setLanguage] = useState(options[0])
const [text,setText] = useState('')

    return(
        <div>
           <div className='ui form'>
               <div className='field'>
                   <h3><label>Enter A Text</label></h3>
                   <input value={text} onChange= {((e) =>setText(e.target.value) )}/>
               </div>
           </div>
            <Dropdown 
            label = "Select A Language" 
            selected = {language}
            onSelectedChange = {setLanguage}
            options={options}/>
            <hr/>
            <h3 className="ui header">Output After Conversion</h3>
            <Convert text={text} langauge={language}/>
        </div>
    )
};
export default Translate;
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM