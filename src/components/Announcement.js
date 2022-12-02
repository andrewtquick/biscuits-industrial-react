const Announcement = () => {
  return (
    <div className="alert alert-success" role="alert" data-mdb-color="success">
      <h4 className="alert-heading">Hello!</h4>
      <p>
        Website is now the latest version!. Feel free to join my{" "}
        <a href="https://discord.gg/kksqmuu" target="__blank">
          Discord
        </a>{" "}
        for updates!
      </p>
      <hr></hr>
      <p className="mb-0">
        Welcome! If you wanna help, you can join the discord above or go to the{" "}
        <a
          target="__blank"
          href="https://github.com/SkippTekk/Biscuits-Industrial-EJS"
        >
          GitHub
        </a>{" "}
        and offer some code!
      </p>
    </div>
  );
};
export default Announcement;
