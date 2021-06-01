import React from 'react'

const Results = (props) => {
    //we pass the repos as props
    const { repos } = props;

    //a functions that fills a list with the html components for each repo
    const listRepos = repos.length !== 0 ?  repos.data.map((item) => 
    <li key={item.id} className="list-group-item" ><a href={item.html_url}>{item.name}</a></li>) :
     <li className="not-found">No repos found</li> 

    return (
        <div>
           {listRepos}
        </div>
    )
};

export default Results