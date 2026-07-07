# Ascend Prep Website

A Vercel-ready Next.js + Tailwind + Framer Motion website for Ascend Prep.

## What is included

- Premium dark/orange Ascend brand direction
- Responsive homepage
- Founder/headshot section
- SAT coaching, admissions strategy, essay coaching sections
- Ascend app showcase using real app screenshots
- Privacy-safe MIT/Princeton/Yale proof cards generated from the acceptance screenshots
- SEO metadata and Open Graph image
- Vercel-ready project structure

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository, for example `ascend-prep`.
2. Upload all files in this folder to that repository.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Use the default settings and click **Deploy**.
6. In Vercel, go to **Project Settings → Domains**.
7. Add `ascendprep.co` and `www.ascendprep.co`.
8. Vercel will show DNS records. Add those records in your domain registrar.

## Booking link

The default booking URL is currently:

`https://calendly.com/ascendprep/free-roadmap`

To change it, either edit `app/page.tsx` or add this environment variable in Vercel:

`NEXT_PUBLIC_BOOKING_URL=https://your-real-booking-link`

## Replace before launch

- Replace `hello@ascendprep.co` if you use a different email.
- Replace the Calendly placeholder with your real booking link.
- Add real testimonials when you have them.
- Add actual blog/resource pages after launch.

## Privacy note

The original acceptance screenshots are intentionally not included in this public project. The site uses privacy-safe proof-card images instead.
