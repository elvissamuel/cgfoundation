import Nav from '@/components/Nav'
import Image from 'next/image'
import herobg from '@/assets/bg-3.jpg'
import { Inter, Lato, Heebo } from 'next/font/google'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Donate from '@/components/Donate'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const heebo = Heebo({ weight: "800", subsets: ['latin'] })


export default function Home() {
  return (
    <main className="text-white overflow-x-hidden">
      <div className='w-screen h-screen relative bg-gradient-to-tr from-gray-400 to-slate-900 overflow-x-hidden'>
        <Image src={herobg} alt='herobg' className='w-full h-full object-cover transform scale-x-[-1] absolute mix-blend-overlay' />
        <NavBar />
        <div className='px-8 md:px-20 pt-16'>
          <h1 className={`text-5xl sm:text-6xl md:text-[4.2rem] text-sky-400 font-extrabold ${heebo.className}`}>Empowering  Hope,</h1> 
          <h1 className=' text-5xl sm:text-6xl md:text-[4.2rem] font-extrabold' > Changing Lives</h1>
          <p className='mt-6'>Together, hand in hand, we advocate, support, and empower, <br /> fostering a world where compassion knows no boundaries.</p>

          <div className='my-6 flex items-center gap-4 font-semibold'>
            <button className='px-6 py-3 bg-blue-900 text-white cursor-pointer'>Contact Us</button>
            <button className='px-6 py-3 bg-sky-500 cursor-pointer'>Donate Now</button>
          </div>
        </div>
      </div>

        <section className=''>
          <About />
        </section>

        <section>
          <Gallery />
        </section>

        <section>
          <Donate />
        </section>

        <section className=''>
          <Contact />
        </section>

        <section>
          <Footer />
        </section>

    </main>
  )
}
