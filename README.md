# spfx-monorepo-sample

## Pnpm

[pnpm](https://pnpm.io/6.x/installation) is required.

## Setup

Clone the repo

    cd yourpath
    git clone https://github.com/stevebeauge/spfx-monorepo-sample.git
    cd spfx-monorepo-sample
    
## Install and build deps

    pnpm i

This will download all dependencies, and compiles sub packages

## Run the project

### Using standard SPFX serve

    gulp serve
    
Add a `Monorepo sample` while browsing with the `?debug=....` query string.

It's working

### Using SPFX fast serve

    pnpm run serve
    
Add a `Monorepo sample` while browsing with the `?debug=....` query string.

It's not working

