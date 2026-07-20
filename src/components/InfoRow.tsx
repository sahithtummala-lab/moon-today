type InfoRowProps = {
  label: string;
  value: string;
  description?: string;
};

function InfoRow({ label, value, description }: InfoRowProps) {
  return (
    <div className="info-row">
      <div className="info-header">
        <span className="info-label">{label}</span>
        <span className="info-value">{value}</span>
      </div>

      {description && (
        <p className="info-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default InfoRow;