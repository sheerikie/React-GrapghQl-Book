const Page = ({page, setToken}) => {
    const contentArray = page['content'].split(" ")

    return (
        <div className="Page text-center">
            {page.tokens.map((token, index) => {
                return <p key={index} onClick={() => {setToken(token.value)}}>
                    {contentArray[index] + " "}
                </p>
                })
            }
            <div className="pageNumber text-center"> Page: {page.pageIndex+1}</div>
        </div>
    );
};

export default Page;