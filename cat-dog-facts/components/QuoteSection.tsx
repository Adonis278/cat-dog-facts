"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, RefreshCw, Sparkles } from 'lucide-react'

interface ZenQuote {
  q: string
  a: string
  h: string
}

export default function QuoteSection() {
  const [quote, setQuote] = useState<ZenQuote | null>(null)
  const [loading, setLoading] = useState(false)
  const [fadeClass, setFadeClass] = useState('opacity-100')

  const fetchQuote = async () => {
    setLoading(true)
    setFadeClass('opacity-0')
    
    try {
      const response = await fetch('/api/quotes')
      const data = await response.json()
      
      if (data && data.length > 0) {
        // Delay to allow fade out animation
        setTimeout(() => {
          setQuote(data[0])
          setFadeClass('opacity-100')
        }, 300)
      }
    } catch (err) {
      console.error('Error fetching quote:', err)
      setFadeClass('opacity-100')
    } finally {
      setTimeout(() => setLoading(false), 300)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Moment of Inspiration
            </h2>
            <Sparkles className="h-6 w-6 text-secondary ml-2" />
          </div>
          <p className="text-lg text-muted-foreground">
            Let wisdom guide your journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4">
                  <Quote className="h-24 w-24 text-primary" />
                </div>
                <div className="absolute bottom-4 right-4 rotate-180">
                  <Quote className="h-24 w-24 text-secondary" />
                </div>
              </div>

              {/* Quote Content */}
              <div className="relative z-10">
                {quote && (
                  <div className={`transition-opacity duration-300 ${fadeClass}`}>
                    <blockquote className="text-center">
                      <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-light italic mb-8">
                        "{quote.q.trim()}"
                      </p>
                      <footer>
                        <cite className="text-xl md:text-2xl text-muted-foreground font-semibold">
                          — {quote.a}
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                )}

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-12">
                    <RefreshCw className="h-8 w-8 animate-spin text-primary mr-3" />
                    <span className="text-lg text-muted-foreground">Finding inspiration...</span>
                  </div>
                )}

                {/* Refresh Button */}
                <div className="text-center mt-8">
                  <Button
                    onClick={fetchQuote}
                    disabled={loading}
                    size="lg"
                    variant="outline"
                    className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <RefreshCw className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      loading ? 'animate-spin' : 'group-hover:rotate-180'
                    }`} />
                    Get New Inspiration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}