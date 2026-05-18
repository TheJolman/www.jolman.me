import type { ComponentChildren } from "preact";

interface CardProps {
  title?: string;
  children?: ComponentChildren;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card surface-card border border-base-300 bg-base-100 shadow-xl">
      <div className="card-body pt-7">
        {title && <div className="card-title text-primary">{title}</div>}
        {children}
      </div>
    </div>
  );
}
