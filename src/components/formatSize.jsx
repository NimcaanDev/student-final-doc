export const FormattedSize = ({ size }) => {
  if (!size) return "Unknown size";

  const formattedSize =
    size >= 1000000
      ? `${(size / 1000000).toFixed(1)} MB`
      : `${(size / 1000).toFixed(1)} KB`;

  return <span>{formattedSize}</span>;
}