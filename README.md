Simple repro for React Native time travel

# Pre Steps

1. Install node modules using `npm install`
2. In `.vscode/launch.json`, change location of node-chakra
3. Run `npm run compile`

# Simple Node Debugging

1. Select `Debug regular node` in VSCode debug menu
2. Set Breakpoint in `src/index.ts`
3. Run debug - VSCode hits these breakpoints

# With Time Travel Debugging

1. Record Time trave logs using `npm run record`
2. Set Break Point in `src/index.ts`
3. Run debug in VSCode with `Replay TTD` - breakpoints are NOT hit
4. Set Breakpoint in `dist/index.js` and run debug - breakpoints are hit