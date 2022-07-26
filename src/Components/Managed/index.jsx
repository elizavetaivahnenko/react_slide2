import React from 'react';
import './Managed.scss'  

export default function CardCreate(props) {
	const { head, body } = props.cards;
  return (
      <section className="cards">
        <h6>{head}</h6>
        <p>{body}</p>
      </section>
  )
}