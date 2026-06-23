import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextWidget({
  widget,
  widgets,
  setWidgets,
}) {
  const handleChange = (value) => {
    const updated = widgets.map((item) =>
      item.i === widget.i
        ? { ...item, content: value }
        : item
    );

    setWidgets(updated);
  };

  return (
    <ReactQuill
      value={widget.content}
      onChange={handleChange}
    />
  );
}