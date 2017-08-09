# react-16-ssr-perf

This repo contains the code for the benchmark used in my Medium article ["What’s New With Server-Side Rendering in React 16"](https://medium.com/@aickin/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67).

<img src="chart.png" alt="Chart showing that React 16 renders on the server faster than React 15" width="240" height="180" border="10">

In the talk, I presented a small ReactJS benchmark, and I edited the code in stages to improve the benchmark performance. All 7 versions of the code are present in this repo as different branches, from stage-0 (no optimizations at all) to stage-6 (all optimizations from the talk applied). Note that each stage includes the tricks from the previous stages.

## How to install

```
git clone https://github.com/aickin/react-16-ssr-perf.git
cd react-16-ssr-perf
```

## How to run

There are three branches, which correspond to the three different test conditions in the graph above:

* new-prod-mode-15: React 15 (raw)
* new-prod-mode-inline-env-15: React 15 (compiled)
* new-prod-mode-16: React 16

To run the benchmark, checkout the branch you want, reinstall dependencies, and then type `npm run benchmark`. For example, if you want to run React 15 (compiled):

```
git checkout new-prod-mode-inline-env-15
rm -rf node_modules && npm install
npm run benchmark
```
