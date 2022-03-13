# 💫Deployment

Deploying via 2 hosting services:

- [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) ([free tier](https://www.gatsbyjs.com/pricing/))
  - Deploys to: <https://friendsoffoxley.co.uk>
  - Hosting Project URL: <https://www.gatsbyjs.com/dashboard/organization/805645db-b2b7-41eb-9afb-5981d52c12d2/sites>
- [Firebase](https://firebase.google.com/products-release?authuser=0&hl=en) ([Free Spark Tier](https://firebase.google.com/pricing?authuser=0&hl=en))
  - Deploys to: <https://friends-of-foxley-prod.firebaseapp.com>
  - Hosting Project URL: <https://console.firebase.google.com/u/0/project/friends-of-foxley-prod/overview>

## Why 2 hosting providers?

- So that if there are issues in one hosting platform I can see if it's a universal issue or an issue specific to Gatsby.
- If Gatsby changes their plan or becomes too unstable I can easily switch-over to firebase.
- Firebase is quicker to deploy so can check my work quicker
- Gatsby cloud generates a lighthouse report on deployment, so can see vital stats
- Gatsby Cloud is optimised for Gatsby code deployments

## Deployment flows

On PR:

- Gatsby PR deployment triggered
- Firebase channel deployment triggered

On merge:

- Gatsby production deployment triggered
- Firebase deployment triggered

## Firebase channels

There are only 3 channels available, so if your PR changes aren't being deployed, then delete one of the 3 channels currently in use
