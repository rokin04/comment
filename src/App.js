import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

const App = props => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("http://demo8708122.mockable.io")
      .then(resp => resp.json())
      .then(res => {
        console.log("here", res);
        setComments(res);
        setLoading(true);
      })
      .catch(err => {
        console.log("err", err);
        setLoading(false);
      });

    console.log(comments);
    // get all the comments
  }, [comments]);

  /**.
   * Add new comment
   * @param {Object} comment
   */
  const addComment = comment => {
    setComments(comment);
    setLoading(true);
  };
  return (
    <div className="App container bg-light shadow">
      <header className="App-header">
        <img
          src={logo}
          className={loading ? "App-logo Spin" : "App-logo"}
          alt="logo"
        />
        <h1 className="App-title">
          React Comments
          <span className="px-2" role="img" aria-label="Chat">
            💬
          </span>
        </h1>
        <p>
          Checkout the tutorial on{" "}
          <a className="text-light" href="https://qcode.in">
            QCode.in
          </a>
        </p>
      </header>

      <div className="row">
        <div className="col-4  pt-3 border-right">
          <h6>Say something about React</h6>
          <CommentForm addComment={addComment} />
        </div>
        <div className="col-8  pt-3 bg-white">
          <CommentList loading={loading} comments={comments} />
        </div>
      </div>
    </div>
  );
};
export default App;
