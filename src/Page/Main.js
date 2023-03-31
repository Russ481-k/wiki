import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

export default function Main({data,setCurrentWiki,setCurrentWikiId}) {
  const [contents, setContents]=useState({})
  const [title, setTitle]=useState("")
  const [text, setText]=useState("")


  const handleTitleChange=(e)=>{
    setTitle(e.target.value)

  }

  const handleTextChange=(e)=>{
    setText(e.target.value)

  }

  const handleSubmit = (e) => {

    setCurrentWiki([...data,{
      id:data.length,
      title:title,
      contents:text
    }])
    e.preventDefault();
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={handleTitleChange}></input>
        <br/>
        <br/>
        <label>contents</label>
        <textarea defaultValue="" onChange={handleTextChange}></textarea>
        <br/>
        <input type="submit" value="Submit" />
      </form>

      <Pagination data={data} setCurrentWikiId={setCurrentWikiId}/>
    </div>
  )
}
