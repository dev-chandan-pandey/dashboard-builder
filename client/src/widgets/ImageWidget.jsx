import React from "react";
import axios from "axios";
export default function ImageWidget({
  widget,
  widgets,
  setWidgets,
}) {
  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://dashboard-builder-6jxk.onrender.com/api/upload",
        formData
      );

      const updated = widgets.map((item) =>
        item.i === widget.i
          ? {
              ...item,
              image: response.data.imageUrl,
            }
          : item
      );

      setWidgets(updated);
    } catch (error) {
      console.error(error);
    }
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