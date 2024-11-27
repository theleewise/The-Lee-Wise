import type { Metadata } from 'next'
import Footer from "./components/Footer";
import PortfolioListing from "./components/PortfolioListing";
import TechStack from './components/TechStack';

export const metadata: Metadata = {
  title: 'The Lee Wise - Senior UI/UX Developer & Designer',
  description: 'The portfolio website of Lee Wise',
}

export default function Home() {
  return (
    <div>
      <main>
        
        <div id="experience"></div>
        <div className='py-20 md:container'>
          <h2 className='text-6xl font-bold'>Experience</h2>
          <p>Coding for over 20 years! Yeah, you read that right.</p>
          <p>I know you're thinking &ldquo;<em>This guy looks too young for that to be true!</em>&rdquo;, but it is.</p>
          <p>That's because even before I was doing this professionally I was coding way back in highschool just because that's how much I love front end development!</p>
        </div>

        <div className='py-20 md:container'>
          <div className="flex gap-4">
          <div>
            <h2 className='text-6xl font-bold'>Tech Stack</h2>
            <p>These technologies are my bread and butter!</p>
          </div>
          <TechStack />
          </div>
        </div>

        <PortfolioListing />  
        
        <div className='py-20 md:container'>
          <h2 className='text-6xl font-bold'>Speaking & Training</h2>
          <p>I love all aspects of front end development and that includes talking about it and teaching others.</p>
          <p>I've spoken at 2 international conferences and 6 national ones</p>
          <p>I also know that I didn't get where I am all alone but rather from the help and guidance of others so I'm passionate about doing the same.</p>
          <p>I have extensive experience with training and guiding juinor developers.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
