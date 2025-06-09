import { PageType } from '../lib/definitions'

export default function Header({ title }: PageType) {
  return (
    <div className="flex flex-col items-start justify-end h-32 max-w-screen-lg w-full">
      <h1 className="text-4xl mt-[80px]">{title}</h1>
    </div>
  )
}