function Header() {
  return (
    <header className="header">
      <img src="/img/bt-logo-white.svg" alt="BT" className="header__logo" />
      <h1>BT React Code Test - by Angus Macrae - 27/04/21</h1>
    </header>
  );
}

function Footer() {
  return <footer className="footer"></footer>;
}

function SearchableNewsFeed() {
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  async function performSearch(query) {
    // perform fetch operation and pass data to setSearchResults
    const DUMMY_DATA = [
      {
        source: {
          id: null,
          name: "Stuff.co.nz",
        },
        author: "BY TOM KRISHER (AP AUTO WRITER)",
        title: "Ford plans to develop and produce electric vehicle batteries",
        description:
          "Stung by the global semiconductor shortage, Ford has decided to take its EV battery development and production in-house to ensure supply in the future.",
        url:
          "https://www.stuff.co.nz/motoring/300287497/ford-plans-to-develop-and-produce-electric-vehicle-batteries",
        urlToImage:
          "https://resources.stuff.co.nz/content/dam/images/4/y/s/7/b/a/image.related.StuffLandscapeSixteenByNine.1420x800.4ys7bd.png/1619641413653.jpg",
        publishedAt: "2021-04-28T20:23:31Z",
        content:
          "Saying that it wants to control the key technology for electric vehicles, Ford plans to open a battery development centre near Detroit by the end of next year.\r\n The company said the 18,500-square-me… [+4198 chars]",
      },
      {
        source: {
          id: null,
          name: "Daily Mail",
        },
        author: "Lauren Fruen, Reuters",
        title:
          "Fatal Tesla crash ignited the car's battery cells that caused a fire, fire officials say",
        description:
          "The Harris County Fire Marshal's Office's report has revealed more details as to how the flames took hold in The Woodlands, Texas on April 17.",
        url:
          "https://www.dailymail.co.uk/news/article-9522445/Fatal-Tesla-crash-ignited-cars-battery-cells-caused-fire-fire-officials-say.html",
        urlToImage:
          "https://i.dailymail.co.uk/1s/2021/04/28/20/42338840-0-image-a-103_1619638878330.jpg",
        publishedAt: "2021-04-28T20:21:57Z",
        content:
          "The fatal Tesla crash which resulted in the deaths of two men may have started after a 'significant front-end collision' ignited the battery, fire officials have said. \r\nDr. William Varner, 59, and E… [+5927 chars]",
      },
    ];
    setSearchResults(DUMMY_DATA);
  }

  return (
    <div>
      <SearchableNewsFeedInput
        performSearch={performSearch}
        query={query}
        setQuery={setQuery}
      />
      <SearchableNewsFeedResults searchResults={searchResults} />
    </div>
  );
}

function SearchableNewsFeedInput({ performSearch, query, setQuery }) {
  function handleSubmit(event) {
    event.preventDefault();
    performSearch(query);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setQuery(newValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={query} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

function SearchableNewsFeedResults({ searchResults }) {
  return (
    <ul>
      {searchResults.map((article) => (
        <SearchableNewsFeedItem article={article} />
      ))}
    </ul>
  );
}

function SearchableNewsFeedItem({ article }) {
  return (
    <li>
      <article>
        <h2>{article.title}</h2>
      </article>
    </li>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SearchableNewsFeed />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
