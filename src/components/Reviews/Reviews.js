import React from "react";
import "./Reviews.css";
import User1 from "../../assets/img/user1.png";
import User2 from "../../assets/img/user2.png";
import User3 from "../../assets/img/user3.png";
import User4 from "../../assets/img/user4.png";
import User5 from "../../assets/img/user5.png";
import User6 from "../../assets/img/user6.png";
import User7 from "../../assets/img/user7.png";
import User8 from "../../assets/img/user8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Reviews = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section-space ">
      <h1 className="platfrom-heading">Hear From Some of Our Investors</h1>
      <div className="reviews-slide">
        <Slider {...settings}>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User1} alt="" />
                <div className="name-detail">
                  <p className="nm">Aaron J.L. Piega</p>
                  <p className="duty theme-color">
                    Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                I connect with their vision of creating a future built on true,
                authentic relationships with those around us, and believe Blue
                is on its way to redefining “social networking”.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User2} alt="" />
                <div className="name-detail">
                  <p className="nm">Jason Robinson</p>
                  <p className="duty theme-color">
                    Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                Blue is such an innovative concept. This company has outstanding
                potential to become a worldwide standard. We have done research
                on their path thus far, and the teams focus looks pretty tunnel.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User3} alt="" />
                <div className="name-detail">
                  <p className="nm">Aaron Ewert</p>
                  <p className="duty theme-color">
                    Active Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                I invested in blue because it’s time for social media to evolve,
                it’s time for business to evolve, during this pandemic it’s time
                for people to feel closer and more social more then ever before.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User4} alt="" />
                <div className="name-detail">
                  <p className="nm">Timothy Gemar</p>
                  <p className="duty theme-color">
                    Active Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                I can see all sorts of applications with this technology! I’ve
                been in sales for most of my adult life and I wish I had access
                to this technology years ago! Blue will be a household name in
                short time!
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User5} alt="" />
                <div className="name-detail">
                  <p className="nm">Fabian Salinas </p>
                  <p className="duty theme-color">
                    Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                Met this dude at a house party years ago and he slowed me how
                his product worked. I was pretty hyped, followed him on ig, and
                watched him pursue his goal. Finally get to invest in Blue. This
                is gonna be HUGE. Good luck bro - @spuddsy.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User6} alt="" />
                <div className="name-detail">
                  <p className="nm">Nathan Oxier</p>
                  <p className="duty theme-color">Value-add Investor</p>
                </div>
              </div>
              <p className="review">
                I love the idea because I feel unnoticed I am a streamer of the
                streaming platform Mixer. If Mixer could be added to this I
                could get more viewership and possibly more follower and
                partnored with Mixer.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User7} alt="" />
                <div className="name-detail">
                  <p className="nm">Jerry Monfiston</p>
                  <p className="duty theme-color">
                    Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                I invested in blue because I believe in the vision I myself have
                had trouble retaining business cards so I believe that in the
                new era that this product will serve a multitude.
              </p>
            </div>
          </div>
          <div>
            <div className="single-review">
              <div className="user-detail">
                <img src={User8} alt="" />
                <div className="name-detail">
                  <p className="nm">Anthony Williams</p>
                  <p className="duty theme-color">
                    Active Investor, Value-add Investor
                  </p>
                </div>
              </div>
              <p className="review">
                I invested because the company is forward thinking, has the
                right technology, global vision. I am a fan of tech, and I
                really like where team Blue is going. The platform is not just
                about a business card and that is exciting.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
