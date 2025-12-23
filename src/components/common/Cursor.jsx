import { useEffect, useState } from "react";
import "../../styles/cursor.css";

export default function Cursor() {
  const [text, setText] = useState("");

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        setText(el.getAttribute("data-cursor"))
      );
      el.addEventListener("mouseleave", () => setText(""));
    });
  }, []);

  return (
    <>
      <div className="cursor"></div>
      {text && <div className="cursor-text">{text}</div>}
    </>
  );
}
