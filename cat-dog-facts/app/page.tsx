import HeroSection from '@/components/HeroSection'
import ContentTypeSelector from '@/components/ContentTypeSelector'
import StressReliefSection from '@/components/StressReliefSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <ContentTypeSelector />
        <StressReliefSection />
      </main>
      <Footer />
    </div>
  );
}
