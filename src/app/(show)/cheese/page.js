import Dish from "@/app/components/dish/component";

async function getData() {
  const res = await fetch("https://dw9vw.wiremockapi.cloud/cheese", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function CheesePage() {
  const data = await getData();

  if (!data) return;

  return (
    <Dish
      data={data}
      title="Cheese"
      description="It is a dairy product obtained in a wide range of flavors, textures and shapes by coagulation of milk protein casein. It contains proteins and fats from milk, usually the milk of cows, buffaloes, goats or sheep. During production, milk is usually acidified and enzymes of either rennet enzyme or bacterial enzymes with similar activity are added to cause coagulation of casein."
    />
  );
}
