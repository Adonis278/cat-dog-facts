"use client"

import { useState, useEffect } from 'react'
import { RefreshCw, Quote } from 'lucide-react'

interface ZenQuote {
  q: string
  a: string
  h: string
}

interface MiniQuoteProps {
  className?: string
  autoRefresh?: boolean
  refreshInterval?: number
}

export default function MiniQuote({ 
  className = "", 
  autoRefresh = false, 
  refreshInterval = 30000 
}: MiniQuoteProps) {
  const [quote, setQuote] = useState<ZenQuote | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/quotes')
      const data = await response.json()
      if (data && data.length > 0) {
        setQuote(data[0])
      }
    } catch (err) {
      console.error('Error fetching quote:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()

    if (autoRefresh) {
      const interval = setInterval(fetchQuote, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  if (loading && !quote) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <RefreshCw className="h-4 w-4 animate-spin text-primary mr-2" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    )
  }

  if (!quote) return null

  return (
    <div className={`group cursor-pointer ${className}`} onClick={fetchQuote}>
      <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
        <Quote className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground leading-relaxed">
            "{quote.q.trim()}"
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            — {quote.a}
          </p>
        </div>
        <RefreshCw className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1" />
      </div>
    </div>
  )
}