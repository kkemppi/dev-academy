import React, { useState } from 'react';
import { useSelector } from 'react-redux'

const Search = () => {
    const names = useSelector(state => state)
    const [filter, setFilter] = useState("")
    const handleFilter = (event) => setFilter(event.target.value)
    const to_show = names.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <form>
                Find names<input onChange={handleFilter}></input>
            </form>
            {to_show.map(name => 
                <div key={name.name}>
                    <div>
                        {name.name} {name.amount}
                    </div>
                </div>
            )}
        </div>
    )
  }

  export default Search