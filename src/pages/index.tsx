import Input from '../components/Input'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-gray-50">
      Home Page
      <div className="mt-6 rounded bg-gray-800 px-8 py-10">
        <Input />
      </div>
    </div>
  )
}
