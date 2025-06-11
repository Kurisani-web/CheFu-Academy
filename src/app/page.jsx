import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: 9, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to CheFu Academy</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
  At CheFu Academy, we’re committed to empowering developers, tech enthusiasts, and lifelong learners through high-quality content and practical knowledge. Whether you're just starting your journey or looking to sharpen your skills, you’ll find something valuable here.
</p>

<ul className='list-disc pl-4 text-gray-500 text-xs sm:text-sm space-y-1'>
  <li>📚 In-depth tutorials on web and mobile development</li>
  <li>💻 Hands-on guides for React, Next.js, Node.js, and Django</li>
  <li>☁️ Cloud & DevOps: Firebase, AWS, CI/CD, Docker, GitHub Actions</li>
  <li>🔐 Cybersecurity basics & best practices</li>
  <li>🤖 AI & Machine Learning projects</li>
  <li>📊 DSA & coding interview prep</li>
  <li>🛠️ Productivity tooling (VS Code, Git, terminal)</li>
  <li>🎯 Freelancing & career guidance</li>
  <li>📱 React Native & Flutter app dev</li>
  <li>🌐 Tech trends & industry news</li>
</ul>
        <Link
          href='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='p-3 flex flex-col gap-8 py-7'>
        <RecentPosts limit={9} />
        <Link
          href={'/search?category=null'}
          className='text-lg text-teal-500 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
