import { ComponentChildren } from 'preact';

interface CardProps {
  title?: string;
  children?: ComponentChildren;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card bg-base-200 shadow-200 shadow-xl border border-base-300">
      <div className="card-body">
        {title && (
          <div className="card-title">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
