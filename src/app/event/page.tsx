import { Metadata } from "next";
import EventPage from "@/components/event/EventPage";

export const metadata: Metadata = {
  title: "Test",
};

export default function EventTestPage() {
  
  return (
    <EventPage />
  );
}
