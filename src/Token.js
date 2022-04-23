//set token to the value clicked 
const Token = ({value, setToken}) => {
    return(
        <div>
             <button
                onClick={()=>{setToken()}}
            >
                  <b> &laquo;</b>  Back
            </button>
            <h1 className="text-center">{value}</h1>
        </div>
    );
};

export default Token;