import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function Layout({ children }) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
            <main>{children}</main>
        <Footer />
      </div>
    )
  }