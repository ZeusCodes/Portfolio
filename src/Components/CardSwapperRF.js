import CardSwap, { Card } from "./CardSwap";
export default function CardSwapperRF() {
  return (
    <div style={{ height: "380px", position: "relative" }}>
      <div className="interests-desc" style={{ width: "50%", left: "60%" }}>
        <h2>Adrenaline Rush </h2>
        <p>Adventure Sports</p>
      </div>
      <CardSwap
        cardDistance={80}
        verticalDistance={70}
        delay={3000}
        pauseOnHover={true}
      >
        <Card>
          <div className="underline">
            <p>Card 1</p>
          </div>
          <div>
            <img
              className="cricket-card-swap"
              src="cricket2.png"
              alt="Thomas Cup School Cricket"
            ></img>
          </div>
        </Card>
        <Card>
          <div className="underline">
            <p>School Cricket Winners</p>
          </div>
          <div>
            <img
              className="cricket-card-swap"
              src="cricket.png"
              alt="Thomas Cup School Cricket"
            ></img>
          </div>
        </Card>
        <Card>
          <div className="underline">
            <p>Card 3</p>
          </div>
          <div>
            <img
              className="cricket-card-swap"
              src="cricket3.png"
              alt="Thomas Cup School Cricket"
            ></img>
          </div>
        </Card>
        <Card>
          <div className="underline">
            <p>Card 4</p>
          </div>
          <div>
            <img
              className="cricket-card-swap"
              src="cricket4.png"
              alt="Thomas Cup School Cricket"
            ></img>
          </div>
        </Card>
      </CardSwap>
    </div>
  );
}
