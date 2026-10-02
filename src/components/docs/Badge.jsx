function Badge({ tone, children }) {
  return <span className={tone ? `badge badge-${tone}` : "badge"}>{children}</span>;
}

export function BadgeList({ items, tone }) {
  return (
    <div className="badge-list">
      {items.map((item) => (
        <Badge key={item} tone={tone}>
          {item}
        </Badge>
      ))}
    </div>
  );
}

export default Badge;
