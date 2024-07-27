import NavBar from "./components/NavBar";
import SKU from "./components/SKU";
import Table from "./components/Table";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (

    <main className="w-auto ml-20 px-8">
      <NavBar />
      <Table />
      <SKU />
      <Toaster />
    </main>
  );
}
