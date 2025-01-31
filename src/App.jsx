import Category from "./components/Category";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRestaurant from "./components/TopRestaurant";

export default function App() {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <TopRestaurant />
      <OnlineDelivery />
    </>
  );
}
