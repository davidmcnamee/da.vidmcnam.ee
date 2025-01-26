import { FC, React } from "react";
import { animated, useSpring } from "react-spring";
import { Background } from "../components/background";

type CompanyLogoProps = { image: string; href: string, backgroundColor?: string };
const CompanyLogo: FC<CompanyLogoProps> = (props) => (
  <a href={props.href} style={{ border: "none" }}>
    <img
      style={{
        height: "2.5em",
        borderRadius: "15%",
        float: "left",
        margin: "0 1em 0 0",
        backgroundColor: props.backgroundColor,
      }}
      src={props.image}
    />
  </a>
);

const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
} as const;

const Index = () => {
  const starProps = useSpring({
    ...fadeIn,
    delay: 400,
    config: { duration: 7000 },
  });
  const titleProps = useSpring({
    ...fadeIn,
    delay: 1200,
    config: { duration: 2800 }
  })
  const introProps = useSpring({
    ...fadeIn,
    delay: 2600,
    config: { duration: 2700 }
  })
  const remainingProps = useSpring({
    ...fadeIn,
    delay: 3400,
    config: { duration: 2700 }
  })

  return (
    <>
      <animated.div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          height: "100vh",
          width: "100vw",
          ...starProps,
        }}
      >
        <Background  />
      </animated.div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, calc(0px - min(50%, calc(50vh - 5em))))",
        }}
      >
        <p>
          site under construction
        </p>
        <animated.h1
          className="text-gradient-pink-blue"
          style={{ lineHeight: "1.1", marginBottom: "0.4em", ...titleProps }}
        >
          check back soon!
        </animated.h1>
      </div>
    </>
  );
};

export default Index;
