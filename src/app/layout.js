
import ReduxProvider from "@/store/provider";
import Header from "../../components/Header/header";
import ServiceCard from "../../components/ServiceCard/serviceCard";
import Footer from "../../components/Footer/footer"
export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <ReduxProvider>
      <Header/>
      {/* <ServiceCard/> */}
        {children}
        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
