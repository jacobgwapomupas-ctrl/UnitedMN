import {
  Bug,
  Image,
  Unplug,
  Hammer,
  Monitor,
  Clapperboard,
  Shield,
  FileText,
  Music2,
} from "lucide-react";
import type { TicketCategory } from "@/lib/content";

const MAP = {
  bug: Bug,
  image: Image,
  plug: Unplug,
  hammer: Hammer,
  monitor: Monitor,
  clapper: Clapperboard,
  shield: Shield,
  file: FileText,
  music: Music2,
};

export function CategoryIcon({ name }: { name: TicketCategory["icon"] }) {
  const Icon = MAP[name];
  return <Icon className="size-5 text-primary" strokeWidth={1.8} />;
}
