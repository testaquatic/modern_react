import { useState } from "react";

export function EventError({ src, alt }: { src: string; alt: string; }) {
  const [path, setPath] = useState(src);
  const handleError = () => setPath("./image/noimage.jpg");
  return (
    <img src={path} alt={alt} onError={handleError} />
  );

}