import { Myheader } from "../components/components";

export function About() {
  console.log("here");

  return (
    <>
      <Myheader />

      <OurMission />
    </>
  );
}

function OurMission() {
  console.log("there");
  return (
    <div class="mission">
      <div class="title">
        <h1>Our Mission</h1>
      </div>
      <p>
        "Our mission at The Motley is to empower individuals to embrace and
        celebrate their unique identities. We believe that true luxury lies in
        the freedom to express oneself authentically, both in appearance and in
        character. Through our carefully curated products and experiences, we
        aim to inspire individuals to feel and look luxurious, reflecting their
        distinctive sense of style. We are dedicated to offering exceptional
        quality, exquisite craftsmanship, and exclusive designs that cater to
        diverse tastes and preferences. However, our mission goes beyond
        personal adornment. We strive to create a supportive and inclusive
        community, where people can embrace their individuality with confidence
        and encourage others to do the same. We believe that by nurturing a
        culture of acceptance and appreciation, we can collectively foster
        personal growth and empower individuals to shine in their own unique
        way. At The Motley, we are committed to helping you unlock your true
        potential, both inside and out. Join us as we embark on a journey of
        self-discovery, where feeling and looking luxurious is an expression of
        your authentic self, and together, we create a world that celebrates and
        embraces the beauty of individuality."
      </p>
    </div>
  );
}
function Testimonials() {
  return (
    <div>
      <h1>charity</h1>
      <p>x charity contribution</p>
      <h1></h1>
    </div>
  );
}
