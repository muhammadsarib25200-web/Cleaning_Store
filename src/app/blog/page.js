'use client';

import Link from 'next/link';
import './blog.css';

const posts = [
  {
    title: 'Home Cleaning Tips for a Fresh Start Every Week',
    category: 'Home Care',
    date: 'May 12, 2026',
    description: 'Simple routines that keep your home feeling fresh, comfortable, and easier to maintain throughout the week.',
    image: '🧼',
  },
  {
    title: 'Why Professional Cleaning Makes a Bigger Difference',
    category: 'Benefits',
    date: 'May 18, 2026',
    description: 'A consistent deep-cleaning routine helps improve comfort, hygiene, and overall peace of mind for homes and workplaces.',
    image: '✨',
  },
  {
    title: 'Kitchen Cleaning Tips That Save Time and Stress',
    category: 'Kitchen',
    date: 'May 25, 2026',
    description: 'Keep your kitchen organized, sanitized, and welcoming with practical steps that reduce clutter and buildup.',
    image: '🍽️',
  },
  {
    title: 'Bedroom Cleaning Habits for Better Rest',
    category: 'Bedroom',
    date: 'June 2, 2026',
    description: 'A cleaner bedroom can help create a calmer atmosphere and improve everyday comfort with minimal effort.',
    image: '🛏️',
  },
  {
    title: 'Office Cleaning Ideas for a Healthier Workplace',
    category: 'Business',
    date: 'June 8, 2026',
    description: 'Professional cleaning supports productivity, hygiene, and a cleaner impression for your staff and clients.',
    image: '🏢',
  },
  {
    title: 'Eco-Friendly Cleaning for a Greener Home',
    category: 'Eco Care',
    date: 'June 14, 2026',
    description: 'From safer products to smarter routines, eco-friendly cleaning keeps your space fresh without harsh chemicals.',
    image: '🌿',
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="page-hero blog-hero">
        <div className="hero-content">
          <p className="eyebrow">OUR BLOG</p>
          <h1>Helpful cleaning advice for every space</h1>
          <p className="hero-text">
            Practical advice, maintenance tips, and ideas for keeping your home or business clean, healthy, and welcoming.
          </p>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-header center">
          <p className="eyebrow green">LATEST ARTICLES</p>
          <h2>Fresh ideas for cleaner living</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-image">
                <span>{post.image}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <Link href="/contact" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
