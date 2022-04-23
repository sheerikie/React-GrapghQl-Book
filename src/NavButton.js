const NavButton = ({ book, pageIndex, offset, setPageIndex }) => {

    return(
        <div className="nav-button text-center">
            <button
                onClick={()=>{setPageIndex(pageIndex-2)}}
                disabled={ pageIndex === 0 }
            >
               <b> &laquo;</b> Previous
            </button>
            <button 
                onClick={()=>{
                setPageIndex(pageIndex+2)
                }}
                disabled={ book.pages.length - offset === pageIndex ? true : false }
            >
                Next<b> &raquo;</b>
            </button>
        </div>  
    );
};

export default NavButton;