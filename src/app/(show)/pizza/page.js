import Dish from "@/app/components/dish/component";

async function getData() {
  const res = await fetch("https://dw9vw.wiremockapi.cloud/pizza", {
    // cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PizzaPage() {
  const data = await getData();

  if (!data) return;

  return (
    <Dish
      data={data}
      title="Pizza"
      description="A traditional Italian dish in the form of a round yeast tortilla, baked with a filling of tomato sauce, cheese and often other ingredients, such as meat, vegetables, mushrooms and other products, laid on top. A small pizza is sometimes called a pizzetta. A chef specializing in pizza preparation is a pizzaiolo."
    />
  );
}
