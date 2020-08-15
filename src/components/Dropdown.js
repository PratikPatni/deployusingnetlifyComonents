import React,{useState , useEffect , useRef} from 'react';

const Dropdown = ({label,options,selected ,onSelectedChange}) => {

    const [open,setOpen] = useState(false);
    const ref = useRef();
     const onBodyClick = (event) => {
        if(ref.current.contains(event.target)){
            return;
        }
         setOpen(false);
    }
    useEffect (() => {
                    document.body.addEventListener('click',onBodyClick)
                        return  () => {
                                     document.body.removeEventListener('click',onBodyClick)
                                      }
                    }, []);
    const renderdOptions = options.map((option)=>{
        if(option.value === selected.value)
        {
            return null;
        }
        return(
        <div
        onClick={()=>onSelectedChange(option)}
        key={option.value}
        className='item'>
            {option.label}
        </div>  
        );
    });
    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>
                  <h3>{label}</h3>
                </label>
                <div onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open ?'visible active':''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ?'visible transition':''}`}>{renderdOptions}</div>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;