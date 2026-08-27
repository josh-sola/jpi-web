# jpi-web (deprecated)

This plugin moved into the consolidated [jpi](https://github.com/josh-sola/jpi)
plugin as its `web` module. This repo now ships only a startup warning.

To switch:

```
pi install git:github.com/josh-sola/jpi
pi remove git:github.com/josh-sola/jpi-web
```

The module can be disabled via `enabled #false` in the `web { }` stanza of
`jpi.kdl`.
