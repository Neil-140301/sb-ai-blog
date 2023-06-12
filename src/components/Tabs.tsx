import Link from "next/link";

export default function Tabs({ tabs, active }: TabsProps) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={{
            pathname: "/new",
            query: { category: tab },
          }}
          prefetch
        >
          <span
            className={`tab-bordered tab ${
              active === tab
                ? "border-b-4 border-orange-500 text-orange-400"
                : "border-0"
            }`}
          >
            {tab}
          </span>
        </Link>
      ))}
    </div>
  );
}

type TabsProps = {
  tabs: string[];
  active: string;
};
