import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.json";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Fetch() {
  const [items] = useState(products);
  AOS.init({ once: true });
  return (
    <>
      <section className="section container">
        {items.products.map(
          ({ id, category, categorydesc, name, desc, small, large }) => (
            <article>
              <h1
                data-aos="fade-up"
                data-aos-duration="1700"
              >{`${category}`}</h1>
              <h3
                className="main"
                data-aos="fade-up"
                data-aos-duration="2000"
              >{`${categorydesc}`}</h3>
              <article
                key={id}
                className="article"
                data-aos="fade-up"
                data-aos-duration="2300"
              >
                <div>
                  <picture>
                    <img src={small} className="imgg" />
                  </picture>
                </div>
                <div>
                  {/* <h2 className="h2">{name}</h2> */}
                  <p className="p">{`${desc}`}</p>
                  <ul className="ul">
                    <li>
                      <Link to={`/${name}`} className="link">
                        More Details
                      </Link>
                    </li>
                    {/* <Link to={`/order/${name}`} className="link"> */}
                    <li>
                      <button className="button">
                        <a
                          href="https://outlook.office365.com/owa/calendar/DigIT1@digitbusiness.ch/bookings/s/m7pWPTEz2UekRZqGZEkCcg2"
                          className="schedule"
                        >
                          Schedule a Meeting
                        </a>
                      </button>
                    </li>
                    {/* </Link> */}
                  </ul>
                </div>
              </article>
            </article>
          )
        )}
      </section>
    </>
  );
}
