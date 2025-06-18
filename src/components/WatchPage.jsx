import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParms] = useSearchParams()
  console.log(searchParms.get('v'));





  return (
    <div className='flex'>
         <div className='m-5 p-3'>
        <iframe 
        
        width="560" 
        height="315"
         src={ "https://www.youtube.com/embed/" + searchParms.get('v') }
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen>


           </iframe>
    </div>
    
    <LiveChat/>

    </div>





 
  )
}

export default WatchPage