import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://zenquotes.io/api/random', {
      headers: {
        'User-Agent': 'MotivateMe/1.0'
      }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote')
    }
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching quote:', error)
    
    // Fallback quote in case of API failure
    const fallbackQuote = [{
      q: "The only way to do great work is to love what you do.",
      a: "Steve Jobs",
      h: "<blockquote>&ldquo;The only way to do great work is to love what you do.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>"
    }]
    
    return NextResponse.json(fallbackQuote)
  }
}