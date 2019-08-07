import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="TinDev" />
      <ul>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/21063343?v=4"
            alt=""
          />
          <footer>
            <strong>Guilherme Bezerra</strong>
            <p>
              Hi there! I am Full-Stack Developer Jr and one enthusiast of
              japanese culture. Want know more about me? Find me on LinkedIn ->
              /in/gbdsantos:)
            </p>
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

      <ul>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/21063343?v=4"
            alt=""
          />
          <footer>
            <strong>Guilherme Bezerra</strong>
            <p>
              Hi there! I am Full-Stack Developer Jr and one enthusiast of
              japanese culture. Want know more about me? Find me on LinkedIn ->
              /in/gbdsantos:)
            </p>
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

      <ul>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/21063343?v=4"
            alt=""
          />
          <footer>
            <strong>Guilherme Bezerra</strong>
            <p>
              Hi there! I am Full-Stack Developer Jr and one enthusiast of
              japanese culture. Want know more about me? Find me on LinkedIn ->
              /in/gbdsantos:)
            </p>
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

      <ul>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/21063343?v=4"
            alt=""
          />
          <footer>
            <strong>Guilherme Bezerra</strong>
            <p>
              Hi there! I am Full-Stack Developer Jr and one enthusiast of
              japanese culture. Want know more about me? Find me on LinkedIn ->
              /in/gbdsantos:)
            </p>
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
}
