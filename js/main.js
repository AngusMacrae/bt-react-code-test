function Header() {
  return (
    <header className="header">
      <img src="/img/bt-logo-white.svg" alt="BT" className="header__logo" />
      <h1>BT React Code Test - by Angus Macrae - 06/05/21</h1>
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
    const apiKey = "4b539b2ac27bf00835b1c5626bb3c284";
    const response = await fetch(
      `https://gnews.io/api/v4/search?max=10&lang=en&q=${query}&token=${apiKey}`
    );
    const data = await response.json();
    setSearchResults(data.articles);
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
        <SearchableNewsFeedItem article={article} key={article.url} />
      ))}
    </ul>
  );
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

  return (
    <li>
      <article>
        <h2>{title}</h2>
        <span>{source.name}</span>
        <p>{truncatedContent}...</p>
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
