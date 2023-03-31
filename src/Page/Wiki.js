import React from 'react'
import WikiContents from '../components/WikiContents';
import Sidebar from '../components/Sidebar';
export default function Wiki({data,currentWikiId,setCurrentWikiId,titleArr,setCurrentWiki,totalData}) {
  return (
    <div>
      <Sidebar
        totalData={totalData}
      />
      <WikiContents 
      data={data} 
      totalData={totalData}
      currentWikiId={currentWikiId}
      setCurrentWikiId={setCurrentWikiId}
      setCurrentWiki={setCurrentWiki}
      titleArr={titleArr}
      />
    </div>
  )
}
