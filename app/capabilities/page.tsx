import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function Capabilities() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Capabilities</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Engineering & Technical Services
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            perspiciatis doloremque consectetur dolorum sequi fuga et facere,
            natus, voluptas esse cupiditate magnam excepturi praesentium porro
            id. Cupiditate sint magnam incidunt dignissimos voluptas nostrum id
            doloribus ratione blanditiis consequatur aliquid, vel tempora iure
            nesciunt repudiandae, dolorem eos perferendis. In ab expedita
            assumenda esse repellendus eos dolores saepe perspiciatis voluptas
            laudantium perferendis itaque deleniti sed rerum et ad doloremque
            eveniet dolorum suscipit aut tempora, quaerat error? Aut modi, esse
            vel deserunt cupiditate error voluptatem?
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Logistics Support
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            perspiciatis doloremque consectetur dolorum sequi fuga et facere,
            natus, voluptas esse cupiditate magnam excepturi praesentium porro
            id. Cupiditate sint magnam incidunt dignissimos voluptas nostrum id
            doloribus ratione blanditiis consequatur aliquid, vel tempora iure
            nesciunt repudiandae, dolorem eos perferendis. In ab expedita
            assumenda esse repellendus eos dolores saepe perspiciatis voluptas
            laudantium perferendis itaque deleniti sed rerum et ad doloremque
            eveniet dolorum suscipit aut tempora, quaerat error? Aut modi, esse
            vel deserunt cupiditate error voluptatem?
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Information Technology
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            perspiciatis doloremque consectetur dolorum sequi fuga et facere,
            natus, voluptas esse cupiditate magnam excepturi praesentium porro
            id. Cupiditate sint magnam incidunt dignissimos voluptas nostrum id
            doloribus ratione blanditiis consequatur aliquid, vel tempora iure
            nesciunt repudiandae, dolorem eos perferendis. In ab expedita
            assumenda esse repellendus eos dolores saepe perspiciatis voluptas
            laudantium perferendis itaque deleniti sed rerum et ad doloremque
            eveniet dolorum suscipit aut tempora, quaerat error? Aut modi, esse
            vel deserunt cupiditate error voluptatem?
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Consulting
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            perspiciatis doloremque consectetur dolorum sequi fuga et facere,
            natus, voluptas esse cupiditate magnam excepturi praesentium porro
            id. Cupiditate sint magnam incidunt dignissimos voluptas nostrum id
            doloribus ratione blanditiis consequatur aliquid, vel tempora iure
            nesciunt repudiandae, dolorem eos perferendis. In ab expedita
            assumenda esse repellendus eos dolores saepe perspiciatis voluptas
            laudantium perferendis itaque deleniti sed rerum et ad doloremque
            eveniet dolorum suscipit aut tempora, quaerat error? Aut modi, esse
            vel deserunt cupiditate error voluptatem?
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            CompleteCloud
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            perspiciatis doloremque consectetur dolorum sequi fuga et facere,
            natus, voluptas esse cupiditate magnam excepturi praesentium porro
            id. Cupiditate sint magnam incidunt dignissimos voluptas nostrum id
            doloribus ratione blanditiis consequatur aliquid, vel tempora iure
            nesciunt repudiandae, dolorem eos perferendis. In ab expedita
            assumenda esse repellendus eos dolores saepe perspiciatis voluptas
            laudantium perferendis itaque deleniti sed rerum et ad doloremque
            eveniet dolorum suscipit aut tempora, quaerat error? Aut modi, esse
            vel deserunt cupiditate error voluptatem?
          </p>
        </div>
      </div>
    </section>
  );
}
