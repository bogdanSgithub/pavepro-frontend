import EmailForm from '@/components/EmailForm';
import QuickNavbar from '@/components/QuickNavbar';

export default function ContactUs() {
  return (
    <main className="min-h-screen justify-center bg-white">
      <QuickNavbar/>
      <EmailForm />
    </main>
  );
}
