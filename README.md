# Getting started

- install pnpm
- switch to node 16. can use nvm or equivalent

```sh
pnpm i
```

```sh
pnpm start
```

# Preface

- was asked by Maxim to only spend 2-3 hours. Given this, I used a high impact, low effort approach (priority matrix)
- lots of things to improve beyond the scope of 3 hours (will list some below)
- this is a monorepo bootstrapped by turborepo https://turborepo.com/

# What I did

- put both express app and react app into monorepo with turborepo.
  - low effort and high impact on productivity. sets you up for everything else
- tried to convert the react app to use latest tooling such as vite and react 19
  - this would take longer than 3 hours so I stopped and called it tictac-fe-new-work-in-progress to make it clear it is in progress
- ported both the express app and react app into /apps
  - fixed some dependencies

# Commits timeline

- you can see my assessment journey with each commit here https://github.com/ts-23/assessment-ins/commits/main/

# What I would do to make it better (or propose in a team, providing the evidence and logic)

- convert to typescript
- complete tictac-fe-new-work-in-progress and delete the old react app
  - remove webpack and use vite, nextjs or equivalent
  - remove a lot of packages that would become necessary once modernised
  - use tailwind for better productivity
  - do a pass with linting and prettier format with new suitable rules
  - remove prop-types
  - update to React 19
  - either convert or rebuild the React components to use functional components. Class is now outdated
  - remove the use of ampersand-app and the app singleton attached to window. We can do this in more standard ways
  - do a pass or file/folder structure and naming to align with modern practices, and team conventions
  - more...
- build out packages/ui to have reusable UI components like our own component library
  - would probably use headless components such as react-aria or equivalent
- build out the reusable code in /packages
- setup UI e2e tests
- remove the public folder from the ws app. No need to couple the FE bundle inside backend
- do a pass to all code to use modern es6 syntax such as let instead of var where appropriate
- convert commonJS to es modules
- do a package upgrade for all apps
- fix any npm security issues especially high and critical
- either refactor or rebuild the backend with modern practices
- more, lots to do but use priority matrix to focus on high impact low effort first

# What I ran out of time todo

- ensure the rest of package scripts work from the port to monorepo
- everything above in 'What I would do to make it better'

# Troubleshooting

Delete node_modules recursively and reinstall as above

```sh
find . -name "node_modules" -type d -exec rm -rf {} \;
```
