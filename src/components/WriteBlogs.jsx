import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


function WriteBlogs() {

  const [val, setVal] = useState([{
    file : "",
    title : "",
    blog : ""
  }])

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value
    })
    console.log("handel ok")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending to DataBase")
  }

  return (
    <>
      <div className="h-[80vh] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-center items-center flex-col">
        <form action="">
          <div className="flex w-[70vw] justify-between item-center">
            <label htmlFor="fileInput" className=""><FaPlus className="border-2 font-bold text-4xl p-1 rounded-full border-white text-white cursor-pointer" /></label>
            <input type="file" value={val.file} name="file" id="fileInput" className="hidden" onChange={handleChange}/>
            <input type="text" value={val.title} name="title" placeholder="Title" autoFocus={true} className="bg-transparent mx-2 w-[90%] text-3xl px-3 border-2 border-white rounded-md outline-none text-white cursor-pointer" onChange={handleChange}/>
            <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg" onClick={handleSubmit}>Publish</button>
          </div>
          <div>
            <textarea name="blog" id="writeBlog" placeholder="Tell your story...." type="text" value={val.blog}
            onChange={handleChange}
            className=" cursor-pointer mt-4 bg-transparent mx-2 w-[100%] h-[50vh] text-3xl border-2 border-white rounded-md outline-none text-white p-3"></textarea>
          </div>
        </form>
      </div>

      <div className="h-[80vh] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-center items-center flex-col">
        <img src={val.file} alt="" />
        <h1>{val.title}</h1>
        <p>{val.blog}</p>
      </div>
      
    </>
  )
}

export default WriteBlogs
