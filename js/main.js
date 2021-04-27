function Header() {
  return <header></header>;
}

function Footer() {
  return <footer></footer>;
}

function SearchableNewsFeed() {
  return (
    <div>
      <SearchableNewsFeedInput />
      <SearchableNewsFeedResults />
    </div>
  );
}

function SearchableNewsFeedInput() {
  return <div></div>;
}

function SearchableNewsFeedResults() {
  return (
    <ul>
      <SearchableNewsFeedItem />
      <SearchableNewsFeedItem />
    </ul>
  );
}

function SearchableNewsFeedItem() {
  return (
    <li>
      <article></article>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <SearchableNewsFeed />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
