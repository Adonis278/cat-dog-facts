"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Video, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'

const contentTypes = [
  {
    id: 'posts',
    title: 'Posts',
    icon: FileText,
    description: 'Quick motivational content to boost your day',
    features: ['Daily Inspiration', 'Quick Reads', 'Shareable Quotes'],
    color: 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
  },
  {
    id: 'blogs',
    title: 'Blogs/Stories',
    icon: BookOpen,
    description: 'In-depth stories and experiences that inspire',
    features: ['Success Stories', 'Life Lessons', 'Deep Insights'],
    color: 'border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5'
  },
  {
    id: 'videos',
    title: 'Short-form Videos',
    icon: Video,
    description: 'Engaging visual content for instant motivation',
    features: ['Video Quotes', 'Quick Tips', 'Visual Stories'],
    color: 'border-accent/20 hover:border-accent/40 hover:bg-accent/5'
  }
]

export default function ContentTypeSelector() {
  const [selectedType, setSelectedType] = useState('posts')

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the type of content that resonates with your current mood and goals
          </p>
        </div>

        <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 h-auto bg-transparent p-0">
            {contentTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground p-0 h-auto"
                  asChild
                >
                  <Card className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${type.color} ${
                    selectedType === type.id ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                  }`}>
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-background rounded-full shadow-sm">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{type.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <div className="mt-12">
            {contentTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-0">
                <Card className="border-none shadow-xl bg-gradient-to-br from-background to-muted/50">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold text-foreground">
                      Explore {type.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Discover content tailored to your interests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                        <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Trending</h3>
                        <p className="text-sm text-muted-foreground">Most popular content</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                        <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Community</h3>
                        <p className="text-sm text-muted-foreground">User favorites</p>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                        <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Recent</h3>
                        <p className="text-sm text-muted-foreground">Latest uploads</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                        Start Exploring {type.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}