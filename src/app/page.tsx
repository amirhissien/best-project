import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "@/ component/hero";
import Weblogs from "@/ component/weblog";
import Aboutus from "@/ component/aboutus";
export default function Home() {
  return (
      <div className="container">
        <div className="row">
            <Hero/>
            <Weblogs/>
            <Aboutus/>
        </div>
      </div>
  );
}
