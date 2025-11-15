import HeroFuturistic from "@/components/HeroFuturistic";
import Story from "@/components/Story";
import SignupForm from "@/components/SignupForm";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroFuturistic />
      <Story />
      <SocialProof />
      <SignupForm />
      <Footer />
    </main>
  );
}
