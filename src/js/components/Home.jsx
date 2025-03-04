import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Headline";
import Card from "./Card";
import Footer from "./Footer";
// array break

const cardArray = [
  {
    title: "cardOne",
    src: "https://placehold.co/400",
    buttonTitle: "Request1",
    paragraph: "Basketball Classes",
  },
  {
    title: "cardTwo",
    src: "https://placehold.co/400",
    buttonTitle: "Request2",
    paragraph: "Tennis Classes",
  },
  {
    title: "cardThree",
    src: "https://placehold.co/400",
    buttonTitle: "Request3",
    paragraph: "Soccer Classes",
  },
  {
    title: "cardFour",
    src: "https://placehold.co/400",
    buttonTitle: "Request4",
    paragraph: "Baseball Classes",
  },
];

//create your first component
const Home = () => {
  return (
    <div class="container">
      <Navbar />
      <Jumbotron />
      <div className="d-flex">
        {cardArray.map((index) => {
          return (
            <div className="m-2">
              <Card cardFour={index}/>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
