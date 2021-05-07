function Header() {
  return (
    <header className="header">
      <div className="content-container">
        <img src="/img/bt-logo-white.svg" alt="BT" className="header__logo" />
        <h1>BT React Code Test - by Angus Macrae - 06/05/21</h1>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content-container">
        <small>
          <ul className="footer__links">
            <li>
              <a
                href="https://gnews.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                GNews
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Flaticon
              </a>
            </li>
            <li>
              <a
                href="https://www.bt.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                BT
              </a>
            </li>
            <li>
              <a
                href="https://angusmacrae.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Angus Macrae
              </a>
            </li>
          </ul>
        </small>
      </div>
    </footer>
  );
}

function SearchableNewsFeed() {
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchStatus, setSearchStatus] = React.useState("");

  async function performSearch(query) {
    setSearchStatus("Searching...");
    const apiKey = "4b539b2ac27bf00835b1c5626bb3c284";
    const response = await fetch(
      `https://gnews.io/api/v4/search?max=10&lang=en&q=${query}&token=${apiKey}`
    );
    const data = await response.json();
    setSearchResults(data.articles);
    if (data.totalArticles > 0) {
      setSearchStatus("");
    } else {
      setSearchStatus("No articles found :(");
    }
  }

  return (
    <div className="content-container">
      <SearchableNewsFeedInput
        performSearch={performSearch}
        query={query}
        setQuery={setQuery}
        setSearchStatus={setSearchStatus}
      />
      <SearchableNewsFeedResults
        searchResults={searchResults}
        searchStatus={searchStatus}
      />
    </div>
  );
}

function SearchableNewsFeedInput({
  performSearch,
  query,
  setQuery,
  setSearchStatus,
}) {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const processedQuery = query.trim();
    const queryRegex = /^[a-z0-9 ]+$/i;
    if (queryRegex.test(processedQuery)) {
      performSearch(processedQuery);
    } else {
      setSearchStatus("Search query may only contain letters or numbers");
    }
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setQuery(newValue);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        onChange={handleChange}
        value={query}
        ref={inputRef}
        placeholder="Search news articles..."
        className="search-form__input"
        aria-label="Search query"
      />
      <button type="submit" className="search-form__submit">
        Search
      </button>
    </form>
  );
}

function SearchableNewsFeedResults({ searchResults, searchStatus }) {
  if (searchStatus) {
    return <span className="search-results__status">{searchStatus}</span>;
  } else {
    return (
      <ul className="search-results">
        {searchResults.map((article) => (
          <SearchableNewsFeedItem article={article} key={article.url} />
        ))}
      </ul>
    );
  }
}

function SearchableNewsFeedItem({ article }) {
  const {
    title,
    description,
    content,
    url,
    image,
    publishedAt,
    source,
  } = article;

  const truncatedContent = content.substring(0, 150);
  const processedPublicationDate = publishedAt
    .substring(0, 10)
    .replaceAll("-", "/");

  return (
    <li className="search-results__item">
      <article>
        <h2>{title}</h2>
        <span className="search-results__item--metadata">
          {source.name} - {processedPublicationDate}
        </span>
        <p>{truncatedContent}...</p>
        <a
          href={url}
          rel="noopener noreferrer"
          className="search-results__item--link"
        >
          View Full Article <img src="/img/right-arrow.svg" alt="" />
        </a>
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
