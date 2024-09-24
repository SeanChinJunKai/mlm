# Functional Requirements

## User Authentication & Management
- [x] Users can sign up and log in using Supabase Auth.
- [ x] Upon registration, each user receives a unique referral link.

## Referral Link Generation & Sharing
- [x] Users can view and copy their unique referral links from the frontend.
- [ ] Users can share their referral links externally.

## Referral Tracking & Hierarchical Management
- [ ] When a new user signs up via a referral link, the system records the referrer.
- [ ] Maintain a hierarchical structure where the first user is the "boss," and subsequent referrals are nested accordingly.
- [ ] Display referral counts and hierarchy in the user dashboard.

## Event-Driven Processing
- [ ] Use Upstash Kafka to handle events such as user sign-ups and referral processing.
- [ ] Ensure all processes (like updating referrals) are handled asynchronously to minimize blocking.

## Data Caching & Optimization
- [ ] Utilize Redis (via Upstash) or MongoDB to cache frequently accessed data, reducing database calls.

## Frontend Deployment
- [x] Develop a user-friendly frontend and deploy it on Vercel.