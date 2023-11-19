import Dish from "@/app/components/dish/component";

async function getData() {
  const res = await fetch("https://dw9vw.wiremockapi.cloud/soup", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res)
  return res.json();
}

export default async function SoupPage() {
  const data = await getData();

  if (!data) return;

  return (
    <Dish
      data={data}
      title="Soup"
      description="A liquid dish containing at least 50% liquid. The liquid part of the soup is called the base, the dense part is called a side dish. Soups are prepared on broths, broths, milk and dairy products and kvass. The side dish in soups is a wide variety of products: vegetables, mushrooms, cereals, legumes and pasta, fish, meat and poultry. A distinctive feature of soup is that it is eaten with a spoon and does not use a knife to chop the products included in it."
    />
  );
}
