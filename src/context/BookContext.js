import React , {createContext, useState} from 'react';
import uuid from 'uuid/v1';

// Context Porvider
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'A Voice in the Wind', author: 'Francine Rivers', id: 1},
        {title: 'An Echo in the Darkness', author : 'Francine Rviers', id: 2},
        {title: 'As Sure as the Dawn', author : 'Francine Rviers', id: 3},
        {title: 'Redeeming Love', author : 'Francine Rviers', id: 4}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };
    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id));
    }
    return ( 
        <BookContext.Provider value= {{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;