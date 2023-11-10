import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="card-image" style={{ width: "18rem" }}>
      <div className="image-wrap">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ heigth: "100%", width: "100%" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {name} is a {age}year old {nationality} professional footballer who
          plays for {team} team and can be spotted easily by his jersey number{" "}
          {jerseyNumber}.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Lionel Messi",
  team: "Paris Saint-Germain",
  nationality: "Argentine",
  jerseyNumber: 30,
  age: 34,
  imageUrl: "/assets/messi.jpg",
};

export default Player;
