import { useEffect, useState } from "react";
import query from './GraphQuery';
import NavButton from "./NavButton";
import endPoint from "./endPoint";
import Page from "./Page";
import {Rings} from 'react-loader-spinner';
import axios from "axios";

const Book = () => {
    const [book, setBook] = useState({});
    const [pageIndex, setPageIndex] = useState(0);
    const [token, setToken] = useState();
    const content = JSON.stringify(query)
    useEffect(() => {
        axios.post(endPoint.baseURL, content,{
            headers: endPoint.headers,
        })
        .then(response => response.data)
        .then(data => {
            const book = data.data.book;
            setBook(book)
        })
        .catch(err => console.log(err))
    }, []);


    const bookAvailable = Object.keys(book).length > 0;

    let offset = 1;
    if (bookAvailable) {
        //checks whether the offset is even
        if (book.pages.length % 2 === 0) {
            offset = 2;
        }
    }
        //checks to see if there is a token value,if not displays book page
    return (
        bookAvailable ? (
            token ? (<p>Token</p>): (
              
                <div className="book-layout">

                            <div className="grid-container">
                                <Page page={book.pages[pageIndex]} setToken={setToken}/>
                                {
                                    (pageIndex + 1) < book.pages.length && <Page page={book.pages[pageIndex+1]} setToken={setToken}/> 
                                }
                            </div>
                            <NavButton offset={offset} book={book} pageIndex={pageIndex}  setPageIndex={setPageIndex}/>
                </div>
              
            )
        ) :  <div className="spinner">
        <Rings color="#00BFFF" height={180} width={180} />
      </div>

    );
};

export default Book;