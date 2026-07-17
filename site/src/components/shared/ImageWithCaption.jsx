function ImageWithCaption({ src, alt, caption, className = '' }) {
  return (
    <figure className={`image-with-caption ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default ImageWithCaption
