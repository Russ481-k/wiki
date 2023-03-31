import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({totalData}) {
  return (
    <div>
        {totalData.map((e)=>
            <h4 key={e.id}><Link to={`/doc/${e.id}`}>{e.title}</Link></h4>
        )}
    </div>
  )
}
