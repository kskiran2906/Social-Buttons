function Button(props) {
  const { style, content } = props;
  return <button className={style}>{content}</button>;
}

const element = (
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Social Buttons</h1>
      <div className="btn-container-1 d-md-none d-lg-none d-xl-none">
        <Button style="btn-1" content="Like" />
        <Button style="btn-2" content="Comment" />
        <Button style="btn-3" content="Share" />
      </div>
      <div className="btn-container-2 d-none d-md-block d-lg-block d-xl-block">
        <button className="btn-1">Like</button>
        <button className="btn-2">Comment</button>
        <button className="btn-3">Share</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
