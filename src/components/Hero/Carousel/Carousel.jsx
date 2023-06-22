/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import hero from '../../../assets/hero.svg';
import Button from '../../Button/Button';

import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export function Carrosel(props) {
  var items = [
    {
      name: 'Lessons and insights',
      span: 'from 8 years',
      description:
        'Where to grow your business as a photographer: site or social media?',
    },
    {
      name: 'Discover the Secrets Unveiling the',
      span: 'Hidden Gems',
      description: 'Unlock the hidden secrets and uncover valuable insights.',
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible="true" interval="8000" height="700px">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export function Item(props) {
  return (
    <Paper>
      <div className="hero-container">
        <div className="hero-call-to-action">
          <h2>
            {props.item.name}{' '}
            {props.item.span && <span>{props.item.span}</span>}
          </h2>
          <p>{props.item.description}</p>
          <Button
            innerText="Register"
            type="primaryButton"
            size="buttonMedium"
          />
        </div>
        <img
          src={hero}
          alt="Hero image, a man using a computer and in your front a giant monitor showing some abstract codes"
        />
      </div>
    </Paper>
  );
}
