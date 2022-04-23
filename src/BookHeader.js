const BookHeader = ({book}) => {
    
    return (
        
        <div className="text-center">
            <h2>Book title: {book.title} </h2>
            <span>Author: {book.author} </span>
        </div>
    ); 
};

export default BookHeader;