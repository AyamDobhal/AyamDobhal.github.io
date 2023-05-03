import AnimatedCursor from "react-animated-cursor";

export const Trailer = () => {
  return (
    <AnimatedCursor
      color="255,255,255"
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      trailingSpeed={20}
      outerStyle={{
        border: "3px solid #fff",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};
