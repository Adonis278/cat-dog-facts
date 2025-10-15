import PetWidget from '../components/PetWidget'

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Cat Facts + Dog Pics</h1>
        <p className="text-sm text-gray-600">Random cat facts and random dog image</p>
      </header>

      <PetWidget />
    </div>
  )
}
