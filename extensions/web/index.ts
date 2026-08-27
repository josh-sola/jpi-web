import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function jpiWebDeprecated(pi: ExtensionAPI) {
  pi.on("session_start", (event, ctx) => {
    if (event.reason !== "startup") return;
    if (!ctx.hasUI) return;
    ctx.ui.notify(
      "jpi-web has moved into the consolidated jpi plugin. Run " +
        "`pi install git:github.com/josh-sola/jpi` to get it back, then " +
        "`pi remove git:github.com/josh-sola/jpi-web` to drop this stub.",
      "warning",
    );
  });
}
