import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const url = "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_640.jpg" 
  const placeholder = "https://via.placeholder.com/215"
  const article1="https://biglife.org/?gad=1&gclid=EAIaIQobChMI6-vjw6eKgQMV8otoCR20IAMKEAAYASAAEgI3BvD_BwE"
  const paragraph="Personal blog by Alpha Likembe"

  return (
    <div className="App">

      <blogData />
      <Header title="Overreacted"/>
      <About 
      image={url}
      size={placeholder}
      name="Blog logo"
      paragraph={paragraph}
      />
      <ArticleList article={article1}/>
    </div>
  );
}

export default App;
