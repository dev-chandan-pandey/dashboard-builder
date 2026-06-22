export default function ImageWidget({
  widget,
  widgets,
  setWidgets,
}) {
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Optional: reject large images
    if (file.size > 1024 * 1024) {
      alert(
        "Please upload an image smaller than 1MB."
      );
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const updated = widgets.map((item) =>
        item.i === widget.i
          ? {
              ...item,
              image: reader.result,
            }
          : item
      );

      setWidgets(updated);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {widget.image && (
        <img
          src={widget.image}
          alt=""
          style={{
            width: "100%",
            marginTop: "10px",
          }}
        />
      )}
    </>
  );
}