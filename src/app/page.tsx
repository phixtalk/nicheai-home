import {
  Spinner,
  Navbar,
  Herostart,
  Search,
  About,
  Services,
  Footer,
  Backtotop,
} from "@/components";

export default function Home() {
  return (
    <>
      <Spinner />
      <Navbar />
      <Herostart />
      <Search />
      <About />
      <Services />
      <Footer />
      <Backtotop />
    </>
  );
}
