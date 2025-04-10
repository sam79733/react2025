function ProgressBar({ progress }) {
  return (
    <div className="progressbar-container">
      <div className="progressbar" style={{ width: `${progress}%` }}></div>
      <span style={{ color: `${progress > 50 ? 'white' : 'black'}` }}>{progress}%</span>
    </div>
  );
}

export default ProgressBar;
