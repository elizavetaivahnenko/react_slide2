import React from 'react'
import '../Managed.scss'
import db from '../db.json' 
import mainText from '../mainText.json'
import CardCreate from '..'

export default function Managed() {
	return (
		<section className='main_Container'>
			<section className='title'>
				<h2>{mainText.h2}</h2>
				<p>{mainText.p1}</p>
				<p>{mainText.p2}</p>
			</section>
			<section className="card_container">
				{db.map((text, index)=> <CardCreate cards={text} key={index}/>)}
			</section>
			<button>Learn More About Managed Contests</button>
	  </section>
  )
}
