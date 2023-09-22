import Link from "next/link";

export default function Breadcrumbs({
  id,
  title,
}: {
  id?: string;
  title?: string;
}) {
  const breadCrumbs = [
    { name: "Главная", url: "/" },
    { name: "Кондиционеры", url: "/products" },
  ];

  if (title) breadCrumbs.push({ name: title, url: `product/${id}` });

  return (
    <ul className="breadcrumbs">
      {breadCrumbs.map((crumb, idx) => (
        <li key={idx} className="breadcrumbs__link">
          <Link href={crumb.url}>{crumb.name}</Link>
          {breadCrumbs.length - 1 !== idx && (
            <div className="breadcrumbs__arrow">
              <span></span>
              <span></span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
