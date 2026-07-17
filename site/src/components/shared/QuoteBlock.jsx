function QuoteBlock({ quote, attribution }) {
  return (
    <figure className="quote-block">
      <blockquote>{quote}</blockquote>
      {attribution && <figcaption>{attribution}</figcaption>}
    </figure>
  )
}

export default QuoteBlock
