import Checkbox from "@/components/ui/icons/checkbox.svg";
export default function Features() {
  const featureItems = [
    { id: "1", title: "online Booking 27/7" },
    { id: "2", title: "Automated SMS & Email Reminders" },
    { id: "3", title: "Google Maps Integration" },
    { id: "4", title: "Secure Online Payments & Deposit" },
  ];
  return (
    <ul className="grid gap-y-2">
      {featureItems.map((item) => (
        <li className="flex items-center gap-x-2 text-lg font-medium" key={item.id}>
          <Checkbox className="text-primary-700 h-4 w-4" />
          {item.title}
        </li>
      ))}
    </ul>
  );
}
