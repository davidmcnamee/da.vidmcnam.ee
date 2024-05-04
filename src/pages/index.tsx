import { FC } from "react";
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
          You've reached...
        </p>
        <animated.h1
          className="text-gradient-pink-blue"
          style={{ lineHeight: "1.1", marginBottom: "0.4em", ...titleProps }}
        >
          David McNamee
        </animated.h1>
        <div style={{ display: "grid", fontSize: "1.2em" }}>
          <animated.p style={introProps}>
            Hi! I'm a software developer in New York, helping to build modern finance at <a href="https://ramp.com">Ramp</a>!
          </animated.p>
          <animated.div style={{ display: "grid", ...remainingProps }}>
          <p style={{ marginBottom: 0 }}>Here's some of the things I've built in the past:</p>
          <div style={{ fontSize: "0.7em", margin: "1em 0" }}>
            <div className="clearfix" style={{ margin: "1em 0" }}>
              <CompanyLogo image="logos/robinhood.png" href="https://robinhood.com"/>{" "}
              An instant debit card payment rail for <a href="https://robinhood.com">Robinhood</a> -- fund your account faster than you can say "buy the dip"!
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
              <CompanyLogo href="https://meta.com" image="logos/meta.jpg" />{" "}
              A C++ security framework for encrypting memory at runtime on ultra-sensitive <a href="https://meta.com">Meta</a> services
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://wish.com" image="logos/wish.jpg" />{" "}
              A faster, more intuitive Product API for <a href="https://wish.com">Wish</a> merchants!
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://lazertechnologies.com" image="logos/lazer.png" />{" "}
              A pilot version of the AirMiles Shopify App at <a href="https://lazertechnologies.com">Lazer Technologies</a>, and the first iteration of RBC's <a href="https://www.gocanadaunited.ca/">Canada United</a> website!
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://snapcommerce.com" image="logos/snapcommerce.png" backgroundColor="#FDFEFE" />{" "}
              A microservice for direct-to-supplier hotel bookings at <a href="https://snapcommerce.com">SnapTravel</a>
            </div>
          </div>
          <p>
            I'm not currently looking for a job... this website is really an excuse to play around with fun particle effects{" "}
          </p>
          
          <p>
            Feel free to reach out to me on{" "}
            <a href="https://www.linkedin.com/in/david-mcnamee/">LinkedIn</a>{" "}
            :)
          </p>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Index;
