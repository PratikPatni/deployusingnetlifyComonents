import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header'

const  items = [
{
    title:'what i react?',
    content:'React is a front end djavascript network'
},
{
    title:'why use react',
    content:'react is famous aong engineers'
},
{
    title:'how to use react',
    content:'by creating components'
}
];
const options = [
{label:'The Color Red',
value:'red'
},
{label:'The Color Green',
value:'green'
},
{
label:'The Color Blue',
value:'blue'
}
];

export default  () => {
   const [selected , setSelected] = useState(options[0]);
return(
    <div>
        <Header/>
      <Route path="/">
          <Accordion items={items}/>
      </Route>
      <Route path="/search">
          <Search />
      </Route>
      <Route path="/dropdown">
          <Dropown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          />
      </Route>
      <Route path="/translate">
          <Translate/>
      </Route>
    </div> 
);
};