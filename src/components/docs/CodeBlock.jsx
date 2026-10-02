import { useEffect, useState } from "react";
import { highlight } from "../../lib/highlight";
import Icon from "../Icon";

const LANG_LABELS = {
  js: "JavaScript",
  json: "JSON",
  http: "HTTP",
  mail: "Mail",
};

/* Koden skrives som template literal i children; første og sidste
   linjeskift fjernes, så den kan stå pænt indrykket i JSX'en. */
function CodeBlock({ title, lang, status, wrap = false, children }) {
  const code = String(children).replace(/^\n/, "").replace(/\n\s*$/, "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      /* Clipboard kan være blokeret (fx uden https) — knappen gør bare ingenting. */
    }
  }

  return (
    <div className={wrap ? "code-block wrap" : "code-block"}>
      <div className="code-head">
        {status ? <span className="code-status">{status}</span> : null}
        <span className="code-title">{title ?? LANG_LABELS[lang] ?? "Kode"}</span>
        <button
          aria-label={copied ? "Kopieret" : "Kopiér kode"}
          className="copy-button"
          onClick={copy}
          type="button"
        >
          <Icon name={copied ? "check" : "copy"} size={14} />
          <span>{copied ? "Kopieret" : "Kopiér"}</span>
        </button>
      </div>
      <pre>
        <code>
          {highlight(code, lang).map((token, index) =>
            token.type ? (
              <span className={`tok-${token.type}`} key={index}>
                {token.text}
              </span>
            ) : (
              token.text
            ),
          )}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
