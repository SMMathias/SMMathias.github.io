import { H3 } from "./Heading";

export function Steps({ children }) {
  return <ol className="steps">{children}</ol>;
}

export function Step({ title, children }) {
  return (
    <li className="step">
      <H3 className="step-title">{title}</H3>
      <div className="step-body">{children}</div>
    </li>
  );
}
