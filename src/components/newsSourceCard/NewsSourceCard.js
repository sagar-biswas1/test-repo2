
import { Link } from 'react-router-dom';
import './newsSourceCard.css'

const NewsSourceCard = ({info}) => {

const{ id,description,category, name, url,country} =info

    return (
      <div class="col">
        {/* <div class=" h-100 source_card">
          <div class="card-header">Category :{category}</div>
          <div class="card-body">
            <h5 class="card-title">Name : {name}</h5>
            <p class="card-text">{description}</p>
            <a href={url} class="new_source_card_button p-2 text-decoration-none">
              Visit us
            </a>
            <Link to={`/news/${id}`} class="new_source_card_button ms-3 p-2 text-decoration-none">
              {" "}
              All news{" "}
            </Link>
          </div>
        </div> */}

        <div class="card_s h-100">
          {/* <img
              src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
              alt="Person"
              class="card__image"
            /> */}
          <h4 class="mt-3">Category :{category}</h4>
          <div class="grid-container">
            <div class="grid-child-posts bg-info p-2">Name: {name}</div>
          </div>
          <div>
            {" "}
            <p class="description"> {description} </p>{" "}
          </div>
          <ul class="social-icons">
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
          <a class="button draw-border" href={url}>
            Visit us
          </a>
        <Link to={`/news/${id}`} class="button draw-border">All news</Link>
        </div>
      </div>
    );
};



export default NewsSourceCard;