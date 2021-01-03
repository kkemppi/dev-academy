import React from 'react'
import { useSelector } from 'react-redux'

const NamesList = (props) => {
    const names = useSelector(state => state)
    console.log("render names")
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

export default NamesList