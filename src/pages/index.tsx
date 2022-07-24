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
        <animated.h1
          className="text-gradient-pink-blue"
          style={{ lineHeight: "1.1", marginBottom: "0.4em", ...titleProps }}
        >
          David McNamee
        </animated.h1>
        <div style={{ display: "grid", fontSize: "1.2em" }}>
          <animated.p style={introProps}>
            Hi! I'm a software developer from Toronto, soon to be graduating
            from the University of Waterloo!
          </animated.p>
          <animated.div style={{ display: "grid", ...remainingProps }}>
          <p style={{ marginBottom: 0 }}>Here's where I've worked so far:</p>
          <div style={{ fontSize: "0.7em", margin: "1em 0" }}>
            <div className="clearfix" style={{ margin: "1em 0" }}>
              <CompanyLogo image="logos/robinhood.png" href="https://robinhood.com"/>{" "}
              At{" "}
              <a href="https://robinhood.com">
                <em>Robinhood</em>
              </a>
              , I've been learning all about Payments! I'm helping to integrate
              the Robinhood system with Stripe so that you can fund your
              Robinhood account via debit card.
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
              <CompanyLogo href="https://meta.com" image="logos/meta.jpg" />{" "}
              At{" "}
              <a href="https://meta.com">
                <em>Meta</em>
              </a>
              , I dived deep into Intel SGX -- a hardware-level technology that
              encrypts memory at runtime, and protects you from high-privileged
              malware.
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://wish.com" image="logos/wish.jpg" />{" "}
              At{" "}
              <a href="https://wish.com">
                <em>Wish</em>
              </a>
              , I rebuilt the Merchant Product API (v3), giving it both a speed
              boost and better DX!
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://lazertechnologies.com" image="logos/lazer.png" />{" "}
              At{" "}
              <a href="https://lazertechnologies.com">
                <em>Lazer Technologies</em>
              </a>
              , I created the pilot version of the AirMiles Shopify App.
            </div>
            <div className="clearfix" style={{ margin: "1em 0" }}>
            <CompanyLogo href="https://snapcommerce.com" image="logos/snapcommerce.png" backgroundColor="#FDFEFE" />{" "}
              At{" "}
              <a href="https://snapcommerce.com">
                <em>SnapTravel</em>
              </a>
              , I built a library to connect directly to hotel-deal suppliers!
              (as opposed to using an aggregator service)
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            When I'm not working, I like to code for fun!
          </p>
          <ul style={{ listStyle: "none", fontSize: "0.7em" }}>
            <li style={{ margin: "1em 0" }}>
              <a href="https://github.com/team-dj/starburst">
                <strong>Starburst</strong>
              </a>{" "}
              is a framework that will (someday soon) allow you to build and
              connect microservices seamlessly. So smooth, it'll feel like
              you're building a monolith!
            </li>
            <li style={{ margin: "1em 0" }}>
              <a href="https://devpost.com/software/groupshot">
                <strong>groupShot</strong>
              </a>{" "}
              is a video-chat app that I built for a hackathon. It crops you out
              and overlays your video feed with that of your partner's, so that
              you can feel like you're together even when socially distanced.
            </li>
          </ul>
          <p>
            Feel free to reach out to me on{" "}
            <a href="https://www.linkedin.com/in/david-mcnamee/">LinkedIn</a>,{" "}
            <a href="https://github.com/davidmcnamee">Github</a>, or{" "}
            <a href="https://discord.com">
              Discord [davidmcnamee#3535]
            </a>{" "}
            :)
          </p>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Index;
