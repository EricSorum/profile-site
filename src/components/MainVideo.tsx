import video from '../assets/water.mp4'

export default function MainVideo() {
  return (
    <video src={video} autoPlay muted loop className="w-full">
    </video>
  )
}