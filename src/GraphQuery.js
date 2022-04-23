const Query = {
    query: `
    {
      book {
        title
        author
        pages {
          content
          pageIndex
          tokens {
            value
            position
          }
        }
      }
    }
  `
};

export default Query;