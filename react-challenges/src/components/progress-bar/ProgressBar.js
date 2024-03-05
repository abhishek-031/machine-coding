export default function ProgressBar({ progress = 60 }) {
  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} className="progress" />
    </div>
  );
}
