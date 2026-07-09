import type {Metadata} from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../ccomponent/footers"
import Nav from "../ccomponent/nav";

export const metadata = {
    title: "امیرحسین بخشی | توسعه دهنده وب",

    description:
        "Portfolio امیرحسین بخشی، توسعه دهنده React، Next.js و Python. مشاهده پروژه‌ها و ارتباط با من.",

    keywords:[
        "امیرحسین بخشی",
        "برنامه نویس",
        "React",
        "Next.js",
        "Python",
        "طراحی سایت",
        "توسعه وب"
    ],

    authors:[
        {
            name:"Amirhossein Bakhshi"
        }
    ],

    openGraph:{
        title:"امیرحسین بخشی | Web Developer",

        description:
            "ساخت سایت‌های مدرن با React و Next.js",

        type:"website",

    },

};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" >
        <body className="bg-black">

       <Nav/>
        {children}
        <Footer/>
        {/* To Top Button */}


        </body>
        </html>
    );
}