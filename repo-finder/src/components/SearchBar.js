import React, { useState } from 'react'
import axios from 'axios'
import Results from "./Results";


const SearchBar = () => {
     // use state for the search input
    const [searchInput, setSearchInput] = useState('');
    //use state to store the repos 
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

   //on click handler that gets the repos from the github api
    const handleClick = async () => {
        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
            setRepos(result);
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <>
     <div className="form-group">
         <input type="text" placeholder="Search by username" value={searchInput} onChange={handleChange}></input>
         <button type="button" className="btn btn-dark" onClick={handleClick}>Search</button>
    </div>
    <Results repos={repos} />
    </>
    )
};

export default SearchBar