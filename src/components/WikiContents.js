import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function WikiContents({data, currentWikiId,setCurrentWikiId,setCurrentWiki,totalData}) {
  const [update, setUpdate] = useState({
    title:data.title,
    contents:data.contents
  })
  const [updateTitle, setUpdateTitle] = useState(data.title)
  const [updateContents, setUpdateContents] = useState(data.contents)
  const [isUpdate, setIsUpdate] = useState(false)
  
  const contentArr = update.contents.split(' ')
  let titleArr = totalData.map(wiki=>wiki.title.toLowerCase())
const resultContents = () =>{
  const resultArr = []
  for(let i = 0; i < contentArr.length ; i++) {
    for(let j = 0; j < titleArr.length; j++){
      if(contentArr[i]===titleArr[j]){
        resultArr.push(`<a herf = "http://localhost:3000/doc/${j}">${contentArr[i]}</a> `)
      }else {
        resultArr.push(`${contentArr[i]}`)
      }
    }
    
  }
  console.log(resultArr.join())
  return <div>{<Link to = "http://localhost:3000/doc/20">링크</Link> }</div>

}


  const handleClick=()=>{
    setIsUpdate(!isUpdate)
  }
  const handleSubmit=(e)=>{
    setIsUpdate(!isUpdate)
    setUpdate({
      title:updateTitle,
      contents:updateContents
    })
  }
  // useEffect(()=>{
  //   console.log(update)
  // },[update])
  return (
    <div>
        {isUpdate?<div>
          <label>title</label>
          <input type='text' value={updateTitle} onChange={e=>setUpdateTitle(e.target.value)}></input>
          <br/>
          <label>contents</label>
          <textarea value={updateContents} onChange={e=>setUpdateContents(e.target.value)}></textarea>
          <button onClick={handleSubmit}>수정</button>
        </div>
        :
        <div>
          <h2>{update.title}</h2><button onClick={handleClick}>수정</button>
          <div>{update.contents}
            {
              resultContents()
            }
          </div>
        </div>
        }
    </div>
  )
}
