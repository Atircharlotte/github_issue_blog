import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './ui/Navbar';
import Sidebar from './ui/Sidebar';
//import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GitHub Issue Blog',
  description: 'write your blog using GitHUb issues!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 ">
        <Navbar />
        <div className="flex h-screen">
          <Sidebar />
          <div className="w-3/4">{children}</div>
        </div>
      </body>
    </html>
  );
}
