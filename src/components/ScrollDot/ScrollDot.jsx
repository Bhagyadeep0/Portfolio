import './scrollDot.scss'

const ScrollDot = () => {
    const urls = ["Home", "About", "Projects", "Contact"];
  return (
    <div className='scrollDot'>
       {urls.map((url) => (
          <a href={`#${url}`} key={url}>
          </a>
        ))}
    </div>
  )
}

export default ScrollDot
