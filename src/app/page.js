import Image from "next/image";
import styles from "./page.module.css";
import Home from "../../components/Home/home";
import HomeServices from "../../components/HomeService/homeService";
export default function Page() {
  return (
    <div>
      <main>
        <Home/>
        <HomeServices/>
      </main>
    </div>
  );
}
