import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h2 className='gradient__text'>A lot is happening, We are blogging about it.</h2>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupeA'>
                    <Article imgUrl={blog01} date="Apr 3, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='gpt3__blog-container_groupeB'>
                    <Article imgUrl={blog02} date="Apr 3, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="Apr 3, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Apr 3, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="Apr 3, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog