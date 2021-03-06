import React from 'react';
import { Link } from 'react-router-dom'

const DefaultReddits = (props) => (
  <Link to={`/r/${props.reddit.display_name}`}>{props.reddit.display_name}</Link>
);

export default DefaultReddits;
