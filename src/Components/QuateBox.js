import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">
        {quote}
      </div>
      <div id="author" className="quote-author">
        - {author}
      </div>
      <button id="new-quote" className="new-quote-button" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${quote} - ${author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;