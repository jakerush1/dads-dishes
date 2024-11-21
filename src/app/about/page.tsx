import { Separator } from "~/components/ui/separator";
import Image from "next/image";

const images = [
  {
    src: "https://scontent.fagc1-2.fna.fbcdn.net/v/t1.6435-9/123940027_10219852082152730_3332973174375816384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=hpLiMs8JRiMQ7kNvgEkIT2s&_nc_zt=23&_nc_ht=scontent.fagc1-2.fna&_nc_gid=AvbDpKrESHa0KrLZZ1DO0l0&oh=00_AYBPBH_0xkUBvjr1EBlM3V54zH-6Z7UI9YnYKMaOxTRN2w&oe=676332AE",
    alt: "Relaxing on a boat",
  },
  {
    src: "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/395207101_10226273412481975_4827278448637342562_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4UAC_JA9wEAQ7kNvgGzLxLW&_nc_zt=23&_nc_ht=scontent.fagc1-2.fna&_nc_gid=AdO1miilgD8R1c4BmJywfrL&oh=00_AYCg_WT5D6brpW1OGz9h_-5uNB_WL7EIN71mpxGt1LZI-w&oe=67428D13",
    alt: "Happy Birthday cake",
  },
  {
    src: "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/385078420_10226144535100121_7096199465535823678_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SOXstzRi_gQQ7kNvgHYND1-&_nc_zt=23&_nc_ht=scontent.fagc1-2.fna&_nc_gid=AH_sftRuZ5k49tfLJJk4QuO&oh=00_AYBD5tnpCbbvUDTX6PMz_f5AMA-DPc8awyg65COpLyFjuw&oe=67429F16",
    alt: "Enjoying the water",
  },
  {
    src: "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/323199421_578334040298465_9174968814051202907_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KlBNumAtTOsQ7kNvgFXBk9e&_nc_zt=23&_nc_ht=scontent.fagc1-2.fna&_nc_gid=AkfCbLn3gR1dLEpGsRXCwWy&oh=00_AYDdMhU_DbHx_xVtnZJVSmeCj5-bsAvdDOEEx7z-60Bikw&oe=67428608",
    alt: "Fine wine",
  },
  {
    src: "https://scontent.fagc1-1.fna.fbcdn.net/v/t39.30808-6/455261116_18465709705029150_5097485446728728240_n.jpg?stp=dst-jpegr&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UxngQmBi8f8Q7kNvgHqILm2&_nc_zt=23&se=-1&_nc_ht=scontent.fagc1-1.fna&_nc_gid=A-sxb7WtEwbFAxXGOMJLgZe&oh=00_AYDOTn9QzHdYrXZ-hrMkLBEgZlBv1v6WkPOPOzuZBUzVUg&oe=67429A4C",
    alt: "Friends gathering",
  },
  {
    src: "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/434499695_10226995788620927_4142181393273241752_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PXMMWTQ_URwQ7kNvgG4t5S0&_nc_zt=23&_nc_ht=scontent.fagc1-2.fna&_nc_gid=Almj_dhvHJ5j1UfOLPKYZfq&oh=00_AYDa6JXAZ4XxlFLxTZj4PRkBpxTG8b2XJiJUXhVuS6v-qA&oe=6742902A",
    alt: "Gourmet dish",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-semibold text-primary">About</h1>
      <div className="mb-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
      <section className="mb-12">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Dedication
            </h3>
            <p className="mb-6 leading-loose text-primary">
              Dedicated to Chelsea, Jake, Jacob, Peyton and those that may
              follow. May you enjoy cooking as much as I do and may you never
              forget, its not about the food….always the family!
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              It&apos;s Not About The Food….But….
            </h3>
            <p className="leading-loose text-primary">
              I’ve never considered food as just fuel. For me the family meal
              has always been the family “glue.” Dinner is the engine of
              conversation, banter, love and laughter. A meal which creates the
              opportunity to share your “peak and pit” discussions each and
              every day.
            </p>
            <p className="leading-loose text-primary">
              I commend to each of you to also think of food that way, as a
              passion to create and feed the love of family and friends.
            </p>
            <br />
            <p className="leading-loose text-primary">
              I commend to each of you to also think of food that way, as a
              passion to create and feed the love of family and friends.
            </p>
            <br />
            <p className="leading-loose text-primary">
              To that end, approach cooking passionately. Remember: a good meal
              need not be complex or complicated. So when you cook – every time
              – show you care, show your love, show those that are eating at
              your table that they are important to you.
            </p>
            <br />
            <p className="leading-loose text-primary">
              So how do you do this in a busy world? How do you show your love
              through your cooking? It’s not really hard, just be thoughtful and
              approach your meals from grilled cheese sandwiches to beef
              bourguignon with the same passion and attention to detail. If your
              time is limited, I have suggestions herein for 30 minute meals. As
              a dear friend used to tell me – simple is good, sometimes better.
              Remember, it’s not really the meal but the process – although good
              food is a plus!
            </p>
            <br />
            <p className="leading-loose text-primary">
              I like to focus and appeal to all five senses when preparing a
              meal. Taste of course, smell obviously, but also think about how
              the meal looks, how is it plated? Do the textures of the different
              courses create the right feel? And lastly sound – you wouldn’t
              think of sound when you prepare a meal but you should – the sound
              of silence only disturbed when a fork hits the plate or a wine
              glass – the table. That sound always put a smile on the cook’s
              face.
            </p>
          </div>
        </div>
      </section>
      <Separator className="h-[3px] bg-primary" />
      <section className="mb-12">
        <div className="pt-8">
          <h3 className="mb-4 text-2xl font-semibold text-primary">
            A note to my daughter –
          </h3>
          <p className="leading-loose text-primary">Chelsea...</p>
          <br />
          <p className="leading-loose text-primary">
            So I was reflecting on my love of Peyton. And I share these thoughts
            from the perspective of a father and grandfather.
          </p>
          <br />
          <p className="leading-loose text-primary">
            As a new dad you’re in shock, awe, bewilderment and in possession of
            a newly found love. You’re so in love with your bride and now,
            almost miracle like, there is a new beautiful soul that makes the
            two of you a family. But it’s a new love, heretofore unexplored,
            something to learn, something that must grow and it does with first
            words, first steps and first kisses.
          </p>
          <br />
          <p className="leading-loose text-primary">
            Then that father becomes a grandfather, with the wisdom of time and
            growth that comes from loving a child, your child. And then before
            your eyes that child, that child who you grew to love so much, has a
            child.
          </p>
          <br />
          <p className="leading-loose text-primary">
            Instantly that grandfather is obsessed. Possessed with love. Sure
            the shock, awe and bewilderment is there but you realize immediately
            that the love of your grandchild needs no growth for your child, her
            mother, already taught you that love.
          </p>
          <br />
          <p className="leading-loose text-primary">
            So at Peyton’s first breath my love was complete.
          </p>
          <br />
          <p className="leading-loose text-primary">Thank you.... Daddy</p>
        </div>
      </section>
      <Separator className="h-[3px] bg-primary" />
      <section className="mb-12">
        <div className="pt-8">
          <h3 className="mb-4 text-2xl font-semibold text-primary">
            A note to my son –
          </h3>
          <p className="leading-loose text-primary">Jake...</p>
          <br />
          <p className="leading-loose text-primary">
            Here I am writing this on your birthday…truly one of the best days
            of my life. See Jake, I always wanted a son, a boy, a buddy. We
            could fish and hunt, golf and workout, talk about life or nothing at
            all. Yes your dad really wanted a son. But what did I get? I got
            more than a son, I got a man, a constant source of pride, an old,
            kind soul who actually showed me how to be a better man.
          </p>
          <br />
          <p className="leading-loose text-primary">
            Sure you made mistakes…. For some reason you LOVED to drink beer in
            front of the police and if it wasn’t in front of them you felt
            compelled to tell them about it! Yet even in those moments of
            transgression you taught me. You taught me to own it. Own your
            actions good and bad for both make up the very fibers of being a
            man. You will meet those that decide to lie, both directly and by
            omission. Never accept that.
          </p>
          <br />
          <p className="leading-loose text-primary">
            How about our Chelsea? She has always been our fierce lioness.
            Always out front. Always challenging those who might want to do us
            harm. You, you are the silent presence right behind her. She is the
            shield and you are the sword. A man of few words but unwavering
            loyalty and strength. A quote comes to mind whose author is
            appropriately unknown:
          </p>
          <br />
          <p className="italic leading-loose text-primary">
            “When fate whispered to the warrior, ‘you cannot withstand the
            storm.’ The warrior whispered back, ‘I am the storm.’”
          </p>
          <br />
          <p className="leading-loose text-primary">
            You are our family’s warrior. Always there for us. Family first.
            Again always showing me what unconditional loyalty means. You are
            also a man of integrity, grit and self-reliance. You not only accept
            responsibility, you seek it out. I know few who pick-up their
            college diploma and are immediately self-reliant. You did that Jake.
            You did it out of shear will. Yes I wanted a boy, a son….and like
            many parents I got one. But as life has shown me, like very few, I
            got a man. Thanks Jake.
          </p>
          <br />
          <p className="leading-loose text-primary">Love, Dad</p>
        </div>
      </section>
    </div>
  );
}
