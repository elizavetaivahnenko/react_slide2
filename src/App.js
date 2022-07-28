import React from 'react'
import Slider from './Components/Slider'
const db = [
  { images: 'https://bipbap.ru/wp-content/uploads/2017/04/0_e7ae3_d81b7d27_orig.jpg' },
  { images: 'https://klike.net/uploads/posts/2019-06/1559887616_1.jpg' },
  {images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTRmNp8syGbJzT_SlLT2VjKGIiazK2mZRRcMFDssxNAT2K-bp5TkY7FBXvh0iwXmnbwk&usqp=CAU'}
]

export default function App() {
  return (
    <Slider images={db} />
  )
}
