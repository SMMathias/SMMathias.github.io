import Icon from "../Icon";

const ICONS = {
  note: "pencil",
  tip: "lightbulb",
  info: "info",
  insight: "zap",
  warning: "alert",
};

function Callout({ type = "note", title, children }) {
  return (
    <div className={`callout callout-${type}`}>
      <Icon className="callout-icon" name={ICONS[type]} size={18} />
      <div className="callout-body">
        {title ? <p className="callout-title">{title}</p> : null}
        {children}
      </div>
    </div>
  );
}

export default Callout;
