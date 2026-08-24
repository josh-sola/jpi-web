# jpi-web

jpi-web is a Pi coding-agent plugin. It adds two model-callable tools:

- `web_search({ query: string })` searches DuckDuckGo and returns up to five
  titles, URLs, and snippets.
- `web_fetch({ url: string, prompt: string })` reads one HTTP or HTTPS URL and
  asks the active authenticated Pi model to answer the prompt from that page.

Both tools run on [ketch](https://github.com/1broseidon/ketch), a keyless
command-line fetcher.

## Install

```sh
pi install git:github.com/josh-sola/jpi-web
```

## How it works

Search always uses DuckDuckGo through ketch's free, keyless backend. It does
not use SearXNG, Docker, an API key, a setup command, or separate web
configuration.

Installing the package downloads the pinned ketch release for your platform,
checks its SHA-256 checksum and version, and installs it under this package's
`node_modules/.cache/` directory. If npm lifecycle scripts are disabled, that
download does not run; a `ketch` executable on `PATH` is the fallback for
local development in that case.

Fetch keeps the full page out of the main conversation and returned tool
details. Existing ketch browser, cookie, rewrite, user-agent, and cache
settings can still affect page extraction. A page that requires JavaScript may
fail without an existing browser configuration. DuckDuckGo may throttle
requests and provides no service guarantee.

This extension implements a smaller interface than Claude's built-in web
tools. It does not include domain filters, domain approval, Claude-specific
redirect or quote rules, or a network sandbox. Ketch can reach any HTTP or
HTTPS address that the host can reach, subject to the user's permissions.

## Develop locally

```sh
npm install
npm test
```

To try a checkout in a Pi session without installing it:

```sh
pi -e .
```
