import "../assets/css/blog.css";

const Blog = () => {
  return (
    <>
      <div className="blog_container">
        <div className="content">
          <p className="about_page"> LATEST UPDATES</p>
          <h1>Expert Insights on Effective Waterproofing Solutions</h1>
          <p className="description">
            Dive deep into our blog for expert insights on cutting-edge
            waterproofing solutions, providing a shield against leaks and
            ensuring a watertight future for your spaces
          </p>
        </div>
        {/* cards */}
        <div className="card_container">
          <div className="cards">
            <img
              src={require("../assets/images/card1.jpg")}
              alt="card"
              width={350}
              height={200}
            />

            <div className="card_des">
              <div className="time_stamp">
                <p className="auth">AWC India</p>
                <p className="time">2024-01-20</p>
              </div>
              <div className="content">
                <h4>
                  How waterproofing return homeliness to homes - Waterproof
                  Exterior Wall Paints
                </h4>
                <p>
                  It is often said that constructing a house is very easy, but
                  making a home is very difficult.That is because
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <img
              src={require("../assets/images/card1.jpg")}
              alt="card"
              width={350}
              height={200}
            />

            <div className="card_des">
              <div className="time_stamp">
                <p className="auth">AWC India</p>
                <p className="time">2024-01-20</p>
              </div>
              <div className="content">
                <h4>
                  How waterproofing return homeliness to homes - Waterproof
                  Exterior Wall Paints
                </h4>
                <p>
                  It is often said that constructing a house is very easy, but
                  making a home is very difficult.That is because
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <img
              src={require("../assets/images/card1.jpg")}
              alt="card"
              width={350}
              height={200}
            />

            <div className="card_des">
              <div className="time_stamp">
                <p className="auth">AWC India</p>
                <p className="time">2024-01-20</p>
              </div>
              <div className="content">
                <h4>
                  How waterproofing return homeliness to homes - Waterproof
                  Exterior Wall Paints
                </h4>
                <p>
                  It is often said that constructing a house is very easy, but
                  making a home is very difficult.That is because
                </p>
              </div>
            </div>
          </div>
          <div className="cards">
            <img
              src={require("../assets/images/card1.jpg")}
              alt="card"
              width={350}
              height={200}
            />

            <div className="card_des">
              <div className="time_stamp">
                <p className="auth">AWC India</p>
                <p className="time">2024-01-20</p>
              </div>
              <div className="content">
                <h4>
                  How waterproofing return homeliness to homes - Waterproof
                  Exterior Wall Paints
                </h4>
                <p>
                  It is often said that constructing a house is very easy, but
                  making a home is very difficult.That is because
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
      </div>
      <div className="CTO">
        <div>
          <p>
            Experience top-quality waterproofing solutions <br /> that stand the
            test of time. Contact us today to get started.
          </p>

          <div className="btn_group">
            <button>Learn More</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
