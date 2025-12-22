// src/components/StatCard.tsx
interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h6 className="card-subtitle text-muted mb-2">{title}</h6>
        <h3 className="card-title mb-1">{value}</h3>
        {subtitle && <p className="card-text text-secondary">{subtitle}</p>}
      </div>
    </div>
  );
}

export default StatCard;
