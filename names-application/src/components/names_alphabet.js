import React from 'react'
import { useSelector } from 'react-redux'

const AlphabetList = (props) => {
    const names = useSelector(state => state)
    return(
        names.map(name => 
            <div key={name.name}>
                <div>
                    {name.name} {name.amount}
                </div>
            </div>
            )
    )
}

export default AlphabetList