import Resume from '@/components/Resume';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Resume | Your Name - Portfolio',
  description: 'View and download my professional resume showcasing my skills and experience.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-24">
        <Resume />
      </div>
      <Footer />
    </main>
  );
} 