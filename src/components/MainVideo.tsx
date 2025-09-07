
import video from '../assets/water.mp4'

export default function MainVideo() {
  return (
    <div className="min-h-[100vh]">
      <video 
        src={video} 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-hidden="true"
      >
      </video>
    </div>
  )
}