"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Waves, Wind, Sun, Moon, Play, Pause, RotateCcw } from 'lucide-react'

const calmingTools = [
  {
    id: 'slime',
    title: 'Digital Slime',
    description: 'Interactive digital slime for stress relief',
    icon: Waves,
    color: 'bg-gradient-to-br from-blue-400 to-purple-500',
    preview: true
  },
  {
    id: 'breathing',
    title: 'Breathing Exercise',
    description: 'Guided breathing patterns for relaxation',
    icon: Wind,
    color: 'bg-gradient-to-br from-green-400 to-blue-500'
  },
  {
    id: 'meditation',
    title: 'Quick Meditation',
    description: '5-minute mindfulness sessions',
    icon: Sun,
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
  },
  {
    id: 'ambient',
    title: 'Ambient Sounds',
    description: 'Soothing soundscapes for focus',
    icon: Moon,
    color: 'bg-gradient-to-br from-indigo-400 to-purple-500'
  }
]

function SlimeGame() {
  const [isActive, setIsActive] = useState(false)
  const [slimeShape, setSlimeShape] = useState('rounded-full')

  const handleSlimeClick = () => {
    setIsActive(true)
    const shapes = ['rounded-full', 'rounded-3xl', 'rounded-lg', 'rounded-2xl']
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
    setSlimeShape(randomShape)
    setTimeout(() => setIsActive(false), 300)
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <h3 className="text-2xl font-bold text-foreground mb-4">Digital Slime Therapy</h3>
      <div className="relative">
        <div
          className={`w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 ${slimeShape} cursor-pointer transition-all duration-300 transform hover:scale-110 ${
            isActive ? 'scale-125 rotate-6' : ''
          } shadow-lg hover:shadow-xl`}
          onClick={handleSlimeClick}
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%), 
                        linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)`
          }}
        />
        <div className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-white pointer-events-none" />
      </div>
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        Click and interact with the slime to release stress and tension
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setSlimeShape('rounded-full')}
        className="mt-4"
      >
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset
      </Button>
    </div>
  )
}

export default function StressReliefSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Calm
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a moment to breathe and reset with our collection of calming tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calmingTools.map((tool) => {
            const IconComponent = tool.icon
            
            if (tool.preview) {
              return (
                <Dialog key={tool.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                      <CardHeader className="text-center">
                        <div className={`mx-auto mb-4 p-4 ${tool.color} rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Button variant="ghost" className="text-primary hover:text-primary/80">
                          Try Now
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Digital Slime Therapy</DialogTitle>
                      <DialogDescription>
                        Interact with the slime to release stress and find your calm
                      </DialogDescription>
                    </DialogHeader>
                    <SlimeGame />
                  </DialogContent>
                </Dialog>
              )
            }

            return (
              <Card key={tool.id} className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 ${tool.color} rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Preview Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-none shadow-2xl bg-gradient-to-br from-background to-muted/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-foreground">
                Take a Deep Breath
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Sometimes the best motivation comes from taking a moment to pause
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Start</h3>
                  <p className="text-sm text-muted-foreground">Begin your calming session</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pause className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Breathe</h3>
                  <p className="text-sm text-muted-foreground">Focus on your breathing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Reset</h3>
                  <p className="text-sm text-muted-foreground">Feel refreshed and ready</p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4">
                  Start Your Journey to Calm
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}