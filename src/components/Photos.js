import React from "react";

export default function Photos({ photos }) {
  if (!photos) return;

  return (
    <section className="Photos">
      <div className="grid grid-cols-2 gap-4 mt-4">
        {photos.map(({ url, link }, index) => {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="relative h-64"
            >
              <img
                src={url}
                className="object-cover w-full h-full rounded-md"
                alt="images based on search value"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
