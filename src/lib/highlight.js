/* En lille tokenizer — nok til de få kodeeksempler på sitet, uden at
   trække et helt highlighting-bibliotek ind. Reglerne prøves i rækkefølge
   på hver position; sticky regexes (y) matcher kun præcis dér. */
const STRING = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/y;

const RULES = {
  js: [
    ["comment", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
    ["string", STRING],
    [
      "keyword",
      /\b(?:import|from|export|default|const|let|await|async|function|return|new|if|else|true|false|null|undefined)\b/y,
    ],
    ["number", /\b\d+(?:\.\d+)?\b/y],
    ["property", /\b[A-Za-z_$][\w$]*(?=\s*:)/y],
    ["function", /\b[A-Za-z_$][\w$]*(?=\s*\()/y],
  ],
  json: [
    ["property", /"(?:[^"\\\n]|\\.)*"(?=\s*:)/y],
    ["string", /"(?:[^"\\\n]|\\.)*"/y],
    ["number", /-?\b\d+(?:\.\d+)?\b/y],
    ["keyword", /\b(?:true|false|null)\b/y],
  ],
  http: [
    ["keyword", /\b(?:GET|POST|PATCH|PUT|DELETE)\b/y],
    ["property", /"(?:[^"\\\n]|\\.)*"(?=\s*:)/y],
    ["string", /"(?:[^"\\\n]|\\.)*"|\{[A-Za-z]+\}/y],
  ],
  mail: [
    ["keyword", /^(?:Til|Emne):/my],
    ["property", /\[[^\]\n]+\]/y],
  ],
};

export function highlight(code, lang) {
  const rules = RULES[lang];
  if (!rules) {
    return [{ type: null, text: code }];
  }

  const tokens = [];
  let plain = "";
  let index = 0;

  while (index < code.length) {
    let matched = false;

    for (const [type, pattern] of rules) {
      pattern.lastIndex = index;
      const match = pattern.exec(code);
      if (match && match[0].length > 0) {
        if (plain) {
          tokens.push({ type: null, text: plain });
          plain = "";
        }
        tokens.push({ type, text: match[0] });
        index += match[0].length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      plain += code[index];
      index += 1;
    }
  }

  if (plain) {
    tokens.push({ type: null, text: plain });
  }

  return tokens;
}
