import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "@/app/ccomponent/hero";
import Weblogs from "@/app/ccomponent/weblog";
import Aboutus from "@/app/ccomponent/aboutus";

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <Hero />
                <Weblogs />
                <Aboutus />
            </div>
        </div>
    );
}