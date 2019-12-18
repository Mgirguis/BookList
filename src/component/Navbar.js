import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'

function Navbar() {
     const {books} = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>My Books list</h1>
            <p>Currently you have {books.length} book's to read</p>
        </div>
    )
}

export default Navbar
