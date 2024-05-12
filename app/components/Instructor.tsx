'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Micah Bell III',
      designation: 'Rat',
      image:
        'https://preview.redd.it/fx16dimhps061.png?auto=webp&s=9297b77cf2b80dff1dbe90367139a62e818e4c6b',
    },
    {
      id: 2,
      name: 'Behroze Aslam',
      designation: 'Guitar Instructor',
      image:
        'https://avatars.githubusercontent.com/u/66128370?s=400&u=a4b77a09cde0c35081ce9d4a8b08f7ba49129b67&v=4',
    },
    {
      id: 3,
      name: 'CJ OG',
      designation: 'Piano Teacher',
      image:
        'https://egw.news/uploads/news/1692455507715.jpg',
    },
    {
      id: 4,
      name: 'Auther Morgan',
      designation: 'Gun Slinger',
      image:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/red-dead-redemption-2-arthur-morgan-undead-nightmare-mod.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    },
  ];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructor