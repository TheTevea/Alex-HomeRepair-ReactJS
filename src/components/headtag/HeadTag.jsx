const HeadTag = ({tagName,text}) => {
  return (
    <div className="header border-color ps-4 mb-5">
        <p className="text-secondary fw-bold text-uppercase">{tagName}</p>
        <h1 className="fw-bold">{text}</h1>
    </div>
  )
}

export default HeadTag