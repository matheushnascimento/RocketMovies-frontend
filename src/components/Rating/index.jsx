import { Container } from "./styles";
import star from "../../assets/star.svg";
import hollow_star from "../../assets/hollow_star.svg";

export function Rating({ value }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<img src={star} key={i} />);
    } else {
      stars.push(<img src={hollow_star} key={i} />);
    }
  }

  return <Container>{stars}</Container>;
}
