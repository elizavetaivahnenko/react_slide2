import React from 'react'
import Slider from '..';
import styles from './Slide.module.scss'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Slide(props) {
	const { images, currentImgId } = props;
	const handle = useFullScreenHandle();
	return (
		<div>
			<FullScreen handle={handle}>
				<div className={styles.imageContainer}>
				<img src={images[currentImgId]} alt="" srcset="" />
				<button onClick={handle.exit}>
					Exit fullscreen
				</button>
		</div>
			</FullScreen>
			<button className={styles.enter} onClick={handle.enter}>
				enter fullscreen
			</button>
		
		
		</div>
  )
}
