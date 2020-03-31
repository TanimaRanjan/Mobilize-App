import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (

    <div className='not_found'>
        <h2 className='not_found_title'>401!  <Link to ='/'>Go Home</Link></h2>
        <img className='error__image' 
        width= "100%"  height= "100%"
        alt = 'Error'
        src='/images/error.png' />
    </div>
)

export default NotFoundPage