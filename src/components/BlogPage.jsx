import React from 'react'
import Data from './Data.js'
// import { useLoaderData } from 'react-router-dom'

function BlogPage() {

    // const data = useLoaderData(Data);
    // const {title, image, category, author, published_date, reading_time, content} = Data

  return (
    <>
      <div className="w-[50%] text-white">
        {
            Data.map = (val,index) => {
                <div id={index}>
                    {/* <img src={val.image} alt="" className='h-[50vh]'/>
                    <p>{val.content}</p> */}

                </div>
            }
        }
      </div>
    </>
  )
}

export default BlogPage
