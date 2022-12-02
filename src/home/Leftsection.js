const LeftBar = () => {
  return (
    <div className="text-center" style={{ height: "100%" }}>
      <iframe
        title="Discord Widget"
        src="https://discordapp.com/widget?id=656049566046748694&theme=dark"
        width="60%"
        height="100%"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <div className="text-center mt-3">
        <span>Stay connected or check up on the updates:</span>
      </div>
    </div>
  );
};
export default LeftBar;
