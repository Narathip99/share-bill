import UnderDevelopmentPage from "@/components/under-development";

export default function Home() {
  const isDevelopment = true;

  return (
    <>
      {isDevelopment && <UnderDevelopmentPage />}
    </>
  );
}
