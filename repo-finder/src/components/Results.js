import React from 'react'

const Results = (props) => {
    const { repos } = props;

    console.log(repos)

    const listRepos = repos.length !== 0 ?  repos.data.map((item) => <li key={item.id} className="list-group-item">{item.name}</li>) : <li className="not-found">No repos found</li>

    return (
        <div>
           {listRepos}
        </div>
    )
};

export default Results