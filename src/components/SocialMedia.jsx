import React from 'react';
import { BsTwitter } from 'react-icons/bs';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/AnkushB97997812">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/ankushbhardwaj408">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/ankush-bhardwaj-9758721b9/">
        <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
