import HomePage from "./home/page";

export default async function Home({ searchParams }: any) {
  return <HomePage searchParams={searchParams} />;
}
