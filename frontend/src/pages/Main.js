import React from 'react';
import logo from '../assets/tindev.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({ match }) {
  return(
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/5642214?v=4" alt="" />
          <footer>
            <strong>Daniel</strong>
            <p>Oloco bicho!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/5642214?v=4" alt="" />
          <footer>
            <strong>Daniel</strong>
            <p>Oloco bicho!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/5642214?v=4" alt="" />
          <footer>
            <strong>Daniel</strong>
            <p>Oloco bicho!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars3.githubusercontent.com/u/5642214?v=4" alt="" />
          <footer>
            <strong>Daniel</strong>
            <p>Oloco bicho!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
