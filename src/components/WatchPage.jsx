import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])


    const [searchParams] = useSearchParams();
    const ido=searchParams.get("v")
  return (
    <div>
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+ido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage