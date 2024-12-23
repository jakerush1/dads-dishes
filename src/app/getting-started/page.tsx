import { Separator } from "~/components/ui/separator";
import { startImages, wineImages, tableImages } from "./constants";
import Image from "next/image";
export const metadata = {
  title: "Getting Started",
  description:
    "Tips and tricks for getting started with cooking, from ingredient selection to kitchen atmosphere and table settings.",
  openGraph: {
    title: "Getting Started | Dad's Dishes",
    description:
      "Tips and tricks for getting started with cooking, from ingredient selection to kitchen atmosphere and table settings.",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/4OOzxA6pSlL7eMlWItNu7s3DGkZJPnoW6dT1R5NMSVOfAywX",
        width: 2496,
        height: 1664,
        alt: "Dad's Dishes - Getting Started Guide",
      },
    ],
  },
};

export default function GettingStarted() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          So How Do You Get Started?
        </h2>
        <div className="mb-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-4">
          {startImages.map((image, index) => (
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
      </section>
      <section className="mb-12">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">Cook.</h3>
            <p className="mb-6 leading-loose text-primary">
              Cook whenever you can. Start simple like grilled cheese but think
              about things like the kinds of cheese, the types of bread, even
              how or if you cut the sandwich before serving. Do you add
              tomatoes? Onions? Pickles? Bacon? Or go with the traditional?
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Use Recipes
            </h3>
            <p className="leading-loose text-primary">
              There are amazing recipes out there from true chefs not just a
              &quot;dad – with a pan&quot; – and many of the recipes contained
              in here come in part from great chefs.{" "}
              <a
                href="https://cooking.nytimes.com/"
                className="text-red-600 underline"
                target="_blank"
              >
                NYT Cooking
              </a>{" "}
              is a great website to consider but there are many. Google early
              and often. The more you cook, the less you’ll follow recipes
              making dishes your own but recipes are a great place to start.
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Follow the Recipes
            </h3>
            <p className="leading-loose text-primary">
              You guys always tease me about not using recipes. Of course I use
              recipes and have for years but after 30+ years, you just remember
              them. Sure you can make them yours, modify them and even create
              what you think is a new dish but all we cook and how we cook it is
              attributable to the great cooks and chefs that have influenced us
              from our parents or grandparents to Julia Child’s – “everything is
              better with butter”. Eventually you are cooking Baba Sue’s chuck
              roast with mashed potatoes or Pappy’s French Toast with Fried Hot
              Dogs. The recipes will become your own but the credit flows from
              all those who have cooked for us or who have shared their
              creations.
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Learn a Bit About the Chemistry of Cooking
            </h3>
            <p className="leading-loose text-primary">
              Learn what vinegar does in certain dishes. Learn what wine or
              vodka does to tomato sauce. Learn how the natural sugars of
              tomatoes, beets or onions can be caramelized and why. Experiment
              on those you love. They will forgive you!
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Create a Fun Atmosphere in the Kitchen
            </h3>
            <p className="leading-loose text-primary">
              Patrick O’Connell of the Inn at Little Washington, a Michelin
              three star restaurant, plays chamber music in the kitchen. Dad –
              well a little country and a little red wine does it for me. The
              point is the kitchen should be fun. Fun makes you creative. It
              makes you smile and smiling while preparing a meal will help put
              smiles on the faces of your guests.
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Ingredients
            </h3>
            <p className="leading-loose text-primary">
              It matters not how talented you are in the kitchen; fresh, top
              shelf ingredients are key – unless you’re French, then you just
              cover everything with butter, cream and herbs and it tastes great!
              Seriously, locally sourced meats and fresh vegetables will make
              you a superstar. Think about it, would you want a rack of lamb
              raised in New Zealand, butchered, frozen and shipped so you could
              serve it months after it was fresh, or Jamison or Elysian Fields
              Farms lamb raised in Western PA and used by chefs like Thomas
              Keller at Per Se in NYC and The French Laundry in Napa? Always go
              with local butchered meats. It costs more but it’s worth it. Also
              make friends with your butcher.
            </p>
            <br />
            <p className="italic leading-loose text-primary">
              Everyone should know a good doctor, a good lawyer and a good
              butcher!
            </p>
            <br />
            <p className="leading-loose text-primary">
              So right now you’re saying, I get it dad, go fresh or go home, but
              what if I want to make a beautiful Bolognese sauce with a touch of
              cream in February? No fresh tomatoes. I get it too, thus my “top
              shelf” comment above. The only canned tomatoes I use for any
              tomato based sauce, from a Pomodoro sauce with fresh basil to
              Bolognese, are Pomodoro S. Manzano Dell’agro Sarnese- Nocerino
              D.O.P. Certified Tomatoes. Yes, a can is three times the cost of
              the others, but definitely worth it. So again, fresh and/or top
              shelf ingredients and don’t forget to give your butcher a
              Christmas present!
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Appetizers, Wine and Cocktails
            </h3>
            <div className="mb-12 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:gap-4">
              {wineImages.map((image, index) => (
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
            <p className="leading-loose text-primary">
              Think of your appetizers as an ice breaker or a warm-up while
              entertaining friends and family. It creates a central location to
              gather, usually the kitchen, to eat, sip and talk. As you know, I
              usually go with charcuterie (and not just because I like saying
              that word!), cheese, honey, olives and oils. It’s a simple – no
              cooking – only presentation. I include some other appetizer
              recipes below so you can mix it up. Regarding wine, there is good
              wine at any budget you just got to search for it by either reading
              up or finding a wine advisor at your local store. Pick a price
              point and stick with it. Go with both red and white. The old rules
              of meat means red and fish white have been thrown out. Buy, and
              drink what you like.
            </p>
            <br />
            <p className="leading-loose text-primary">
              Pitchers of homemade cocktails can be pretty cool. Mojitos,
              Margaritas, even Manhattans, but know your guests – fancy
              cocktailing has faded a bit in favor of wine, tequila, vodka, gin
              or bourbon.
            </p>
          </div>
          <Separator className="h-[3px] bg-primary" />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary">
              Table Settings
            </h3>
            <div className="mb-12 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:gap-4">
              {tableImages.map((image, index) => (
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
            <p className="leading-loose text-primary">
              For a party, set up the night before. It makes things easier. For
              a simple family meal, wing it but wing it with candles. Votive
              candles are a simple added touch that adds warmth to a family
              dinner on a Tuesday. Throw some on the table, it makes a
              difference. For your dinner parties, flowers make every table
              better. Go with low arrangements so folks can still see and talk
              with each other. Also cards with questions at each setting creates
              a great conversation after dinner. Lots of cards out there… some
              are a bit racy, so know your group.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="rounded-lg bg-muted p-6">
          <h3 className="mb-4 text-2xl font-semibold text-primary">
            So to sum up
          </h3>
          <p className="leading-loose text-primary">
            Ingredients matter, passion matters, but most importantly, your love
            for your family and friends matter most. Love unconditionally, it is
            the best tip I can leave you with.
          </p>
        </div>
      </section>
    </div>
  );
}
