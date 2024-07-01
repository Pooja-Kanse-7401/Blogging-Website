import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, removeBlog } from '../Utils/blogSlice'


function BlogPage() {
  const cardData = useSelector((store) => store.blogs.card)
  console.log(cardData)

  const dispatch = useDispatch()

  return (
    <>
      
      <div className="h-[290vh] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-start items-center flex-col overflow-y-scroll no-scrollbar ">
        {
          cardData?.map((val, i) => {
            return (
              // <li>{val.blog}</li>
              <>
                <div id='index' className='text-white w-[90%] md:w-[70%] h-[90vh] m-2 border-none bg-black/15'>
                  <span className='w-[100%] h-[50%] '>
                    <img src={val.file} alt="" className='w-[100%] h-[30vh]' />
                  </span>
                  <h1 className='text-4xl font-bold m-3'>{val.title}</h1>
                  <div className='overflow-y-scroll h-[40vh]'>
                    <p className='mx-4'>{val.blog}</p>
                  </div>
                  <button className="text-white bg-red-500 px-3 ml-3 my-3 rounded-md p-1 hover:bg-red-700 text-lg" 
                  onClick={() =>dispatch(removeBlog(val))}>Delete Blog</button>
                </div>
              </>

            )
          })
        }

        {/* <h1 className='text-white '> kjdflk</h1> */}
      </div>

    </>
  )
}

export default BlogPage
