import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import AboutPage from "./about/page";

export default function Home() {
    return(
      <div>
        <NavBar />
        <h1 className="text-center">Home Page</h1>
        <AboutPage />
        <Footer />
      </div>
    );
}