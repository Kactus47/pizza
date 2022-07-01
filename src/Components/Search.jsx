import React from "react";
import debounce from 'lodash.debounce'
import { setSearchValue } from "../redux/filterSlice";
import {useDispatch} from 'react-redux';


function Search() {
  const [inputText, setInputText] = React.useState('');
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  const changeSearch = (e) => {
    setInputText(inputRef.current.value);
    changeInput(inputRef.current.value);
  }

  const changeInput = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

 
  const clearSearch = () => {
    inputRef.current.focus();
    dispatch(setSearchValue(''));
  }
  
  return (
    <div className='header__search'>
      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
      <input ref={inputRef} onChange={changeSearch} type="text" value={inputText} placeholder="Введите ваш запрос...." />
      {
        inputText &&
        <svg onClick={()=>clearSearch()} className="clear" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
      }
    </div>
  );
}

export default Search;