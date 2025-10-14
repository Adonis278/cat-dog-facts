"use client"

import { useCallback, useState } from 'react'

type CatFact = {
  fact: string
  length: number
}

type DogResp = {
  message: string
  status: string
}

export default function PetWidget() {
  const [catFact, setCatFact] = useState<CatFact | null>(null)
  const [dogUrl, setDogUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBoth = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [catRes, dogRes] = await Promise.all([
        fetch('https://catfact.ninja/fact'),
        fetch('https://dog.ceo/api/breeds/image/random'),
      ])

      if (!catRes.ok) throw new Error('Failed to fetch cat fact')
      if (!dogRes.ok) throw new Error('Failed to fetch dog image')

      const catData = (await catRes.json()) as CatFact
      const dogData = (await dogRes.json()) as DogResp

      setCatFact(catData)
      setDogUrl(dogData.message)
    } catch (err: any) {
      setError(err?.message ?? 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Cat fact</h2>
          <p className="mt-2 text-gray-700 min-h-[3rem]">{catFact ? catFact.fact : 'Click refresh to load a cat fact.'}</p>
        </div>

        <div className="w-48 h-48 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
          {dogUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={dogUrl} alt="Random dog" className="object-cover w-full h-full" />
          ) : (
            <span className="text-sm text-gray-500">Dog image will appear here</span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-red-600">{error}</div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchBoth}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>
    </section>
  )
}
