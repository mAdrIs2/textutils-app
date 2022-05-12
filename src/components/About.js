import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={props.mode === "dark" ? { color: "white" } : null}
    >
      <h2 className="my-3">About Us</h2>
      <p className="my-3">
        This is text utility app. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quasi animi doloribus neque porro, expedita
        repudiandae hic praesentium illum quibusdam officiis corporis omnis ab
        aperiam eius. Quis nesciunt nobis sapiente fuga cupiditate dolorum vitae
        voluptas eligendi! Exercitationem vero distinctio possimus repellendus
        non provident a tempore dolor temporibus ea, est nobis esse, repudiandae
        cupiditate in, placeat delectus! Ratione necessitatibus dolor neque
        nulla tempora quam quae natus, laudantium veniam, error nisi iusto omnis
        corrupti laboriosam, labore eaque quis. Minus quas hic, rerum
        praesentium soluta illum facilis dolorem, similique molestiae sequi nam
        molestias repellendus magni veniam cumque doloribus unde ipsam natus
        quod ipsa modi.
      </p>
    </div>
  );
}
