import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found - The Lee Wise - Senior UI/UX Developer & Designer',
}
const NotFoundPage = () => (
  <div className='py-20 md:container'>
    <h1 className='text-6xl font-bold'>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
