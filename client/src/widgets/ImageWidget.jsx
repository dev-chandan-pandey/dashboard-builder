export default function ImageWidget({
  widget,
  widgets,
  setWidgets,
}) {
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const image = URL.createObjectURL(file);

    const updated = widgets.map((item) =>
      item.i === widget.i
        ? { ...item, image }
        : item
    );

    setWidgets(updated);
  };

  return (
    <>
      <input
        type="file"
        onChange={handleChange}
      />

      {widget.image && (
        <img
          src={widget.image}
          width="100%"
          alt=""
        />
      )}
    </>
  );
}