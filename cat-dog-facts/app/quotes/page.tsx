import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import QuoteWidget from '@/components/QuoteWidget'
import MiniQuote from '@/components/MiniQuote'

export const metadata: Metadata = {
  title: 'Daily Quotes - MotivateMe',
  description: 'Discover daily inspiration with our collection of motivational quotes from great minds throughout history.',
}

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-4">
                Daily Quotes
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover wisdom, inspiration, and motivation from great minds throughout history. 
                Let these words guide and uplift your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Main Quote Widget */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteWidget />
          </div>
        </section>

        {/* Mini Quote Samples */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              More Inspiration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <MiniQuote autoRefresh={true} refreshInterval={10000} />
              <MiniQuote autoRefresh={true} refreshInterval={15000} />
              <MiniQuote autoRefresh={true} refreshInterval={20000} />
            </div>
          </div>
        </section>

        {/* Quote Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Explore Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Success', emoji: '🎯', color: 'bg-primary/10 hover:bg-primary/20' },
                { name: 'Wisdom', emoji: '🧠', color: 'bg-secondary/10 hover:bg-secondary/20' },
                { name: 'Life', emoji: '🌟', color: 'bg-accent/10 hover:bg-accent/20' },
                { name: 'Happiness', emoji: '😊', color: 'bg-muted hover:bg-muted/80' },
                { name: 'Love', emoji: '❤️', color: 'bg-red-50 hover:bg-red-100' },
                { name: 'Dreams', emoji: '✨', color: 'bg-purple-50 hover:bg-purple-100' },
                { name: 'Change', emoji: '🔄', color: 'bg-blue-50 hover:bg-blue-100' },
                { name: 'Hope', emoji: '🌅', color: 'bg-orange-50 hover:bg-orange-100' },
              ].map((category) => (
                <div
                  key={category.name}
                  className={`p-4 rounded-lg ${category.color} transition-colors duration-200 cursor-pointer text-center group`}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {category.emoji}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}