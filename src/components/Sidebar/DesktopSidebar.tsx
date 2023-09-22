import InverterFilter from "./InverterFilter";
import PriceFilter from "./PriceFilter";
import AreaFilter from "./AreaFilter";
import BrandFilter from "./BrandFilter";
import CountryFilter from "./CountryFilter";

export default function DesktopSidebar() {
  return (
    <aside className="sidebar">
      <InverterFilter />
      <PriceFilter />
      <AreaFilter />
      <BrandFilter />
      <CountryFilter />
    </aside>
  );
}
