import type { ComponentChildren } from "preact";

interface CardProps {
  title?: string;
  children?: ComponentChildren;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card bg-neutral text-neutral-content shadow-xl border border-neutral-content">
      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {children}
      </div>
    </div>
  );
}
