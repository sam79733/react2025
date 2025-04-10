function Task({ title }) {
  return (
    <div className="task-container">
      <input type="checkbox" />
      <div className="title-container">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Task;
