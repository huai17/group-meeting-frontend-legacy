export default (options) =>
  options && options.mode === "local"
    ? "http://localhost:5000"
    : "https://group.liveteach.io";
