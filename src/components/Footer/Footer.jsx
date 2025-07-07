import { Container } from "../Container/Container";
import S from "./Footer.module.css";

export function Footer() {
  return (
    <div className={S.container}>
      <Container>Все права защищены</Container>
    </div>
  );
}
