import "./projects.scss";
const projects = () => {
  return (
    <div className="project">
        <div className="textContainer">
          <p>Something goes here</p>
          <hr />
        </div>
      <div className="wrapper">
        <div className="titleContainer">
        <div className="imgContainer">
            <img src= "zoro3.jpg" alt="zoro" />
            </div>
          <div className="title">
            <h1>Some text</h1>
          </div>
        </div>
        <div className="boxContainer">
          <div className="box">
            <h2>Title</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              culpa?
            </h3>
            <button>Text</button>
          </div>
          <div className="box">
            <h2>Title</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              culpa?
            </h3>
            <button>Text</button>
          </div>
          <div className="box">
            <h2>Title</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              culpa?
            </h3>
            <button>Text</button>
          </div>
          <div className="box">
            <h2>Title</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              culpa?
            </h3>
            <button>Text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
