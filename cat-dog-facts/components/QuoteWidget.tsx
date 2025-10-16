"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, RefreshCw, Share, Heart } from 'lucide-react'

interface ZenQuote {
  q: string  // quote text
  a: string  // author
  h: string  // HTML formatted
}

export default function QuoteWidget() {
  const [quote, setQuote] = useState<ZenQuote | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [liked, setLiked] = useState(false)

  const fetchQuote = async () => {
    setLoading(true)
    setError(null)
    setLiked(false)
    
    try {
      const response = await fetch('/api/quotes')
      const data = await response.json()
      
      if (data && data.length > 0) {
        setQuote(data[0])
      } else {
        setError('No quote received')
      }
    } catch (err) {
      setError('Failed to fetch quote')
      console.error('Error fetching quote:', err)
    } finally {
      setLoading(false)
    }
  }

  const shareQuote = async () => {
    if (!quote) return
    
    const shareText = `"${quote.q.trim()}" - ${quote.a}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Inspirational Quote',
          text: shareText,
          url: window.location.href
        })
      } catch (err) {
        // User cancelled sharing or error occurred
        copyToClipboard(shareText)
      }
    } else {
      copyToClipboard(shareText)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-foreground">
          <Quote className="h-6 w-6 text-primary" />
          Daily Inspiration
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {loading && (
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading inspiration...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchQuote} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {quote && !loading && (
          <div className="space-y-6">
            {/* Quote Display */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground font-medium italic pl-8 pr-4">
                {quote.q.trim()}
              </blockquote>
              <div className="absolute -bottom-2 -right-2 text-6xl text-primary/20 font-serif rotate-180">"</div>
            </div>

            {/* Author */}
            <div className="text-right">
              <cite className="text-lg text-muted-foreground font-semibold">
                — {quote.a}
              </cite>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => setLiked(!liked)}
                variant="ghost"
                size="sm"
                className={`transition-colors duration-200 ${
                  liked 
                    ? 'text-red-500 hover:text-red-600' 
                    : 'text-muted-foreground hover:text-red-500'
                }`}
              >
                <Heart className={`h-5 w-5 mr-2 ${liked ? 'fill-current' : ''}`} />
                {liked ? 'Loved' : 'Love'}
              </Button>

              <Button
                onClick={shareQuote}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Share className="h-5 w-5 mr-2" />
                Share
              </Button>

              <Button
                onClick={fetchQuote}
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={loading}
              >
                <RefreshCw className={`h-5 w-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
                New Quote
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}