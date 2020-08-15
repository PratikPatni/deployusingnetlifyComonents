import React from 'react';

const Link = ({className , href ,children}) => {
   const onClick = (event) => {

    if (event.ctrlkey) {
        return;
    }
       event.preventDefault();
       window.history.pushState({} , '' , href);

const navEvent = new PopStateEvent('popstate');
window.dispatchEvent(navEvent);
//communicates to route coponent that the url just changed

   }
   
   
    return(
            <a onClick={onClick}
            className={className}
             href={href}>
            <h2>{children}</h2> 
             </a>
          );
};

export default Link;
