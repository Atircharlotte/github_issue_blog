import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import IntroSection from './ui/IntroSection';

export default async function Home() {
  //const session = await getServerSession(options);
  return (
    <>
      <IntroSection />
    </>
  );
}
