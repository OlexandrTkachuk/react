import {
  Container,
  Image,
  PizzaInfo,
  Text,
  Title,
} from './FullPizzaComponent.styled';

const FullPizza = ({ item }) => {
  const { imageUrl, title, ingredients } = item;

  return (
    <Container>
      <Image src={imageUrl} alt={title} width={450} />

      <PizzaInfo>
        <Title>{title}</Title>
        <Text>{ingredients}</Text>
      </PizzaInfo>
    </Container>
  );
};

export default FullPizza;
