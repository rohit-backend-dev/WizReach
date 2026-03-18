import Hero from "@/components/homepage/Hero"
import HeroDown from "@/components/homepage/HeroDown"
import CustomerReview from "@/components/CustomerReview"
import TryMe from "@/components/TryMe"
import HowWeWork from "@/components/HowWeWork"
import HeroMiddle from "@/components/homepage/HeroMiddle"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroMiddle />
      <HowWeWork />
      <HeroDown />
      <CustomerReview />
      <TryMe />

    </>
  )
}
 