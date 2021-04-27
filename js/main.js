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
