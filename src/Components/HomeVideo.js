
const HomeVideo = () => {
  return (
    <div style={styles.container}>
      <video style={styles.video} autoPlay loop muted>
        <source src="/Videos/honey.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={styles.acenter}
        className="flex flex-col items-center justify-center absolute inset-0"
      >
        <h1
          className="hero-title text-white text-center font-bold text-lg p-2"
          style={styles.text}
        >
          Freshly Baked,Pure<br />
            Delight Always        </h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Ensures the container takes full viewport height
    width: "100%",
    overflow: "hidden", // Prevents video overflow
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the video covers the entire container
    zIndex: 0, // Places the video behind the text and button
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white", // Text color
    zIndex: 1, // Ensure the text stays above the video
    textAlign: "center",
    padding: "10px", // Adds some spacing around the text
  },
  acenter: {
    position: "absolute", // Position the text relative to the container
    zIndex: 1, // Ensures it stays on top of the video
  },
};

export default HomeVideo;
