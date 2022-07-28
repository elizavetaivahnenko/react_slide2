import React from 'react'
import Slider from '..';

export default function Slide(props) {
	const { images,currentImgId } = props;
  return (
	  <div>{images[currentImgId]}</div>
  )
}
