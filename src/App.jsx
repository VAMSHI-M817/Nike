import Nav from "./components/Nav";
import {
  Hero,
  Popular,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

export default function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <Popular />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 wide:full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t bg-black pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
