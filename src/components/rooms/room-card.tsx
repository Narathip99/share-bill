import React from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  title: string;
  lastUpdated: string;
  total: number;
  people: number;
  href: string;
};

const RoomCard: React.FC<Props> = ({
  title,
  lastUpdated,
  total,
  people,
  href,
}) => {
  return (
    <Card className="p-4 flex justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{title ? title : ""}</h3>
        <p className="text-sm text-gray-600">
          Last Updated: {lastUpdated ? lastUpdated : ""} hours ago
        </p>
        <p className="text-sm">Total: {total ? total : ""} Bath</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Badge variant="secondary" className="w-fit">
          {people ? people : ""} people
        </Badge>
        <Link
          href={href ? href : "/"}
          className="text-sm flex items-center gap-2"
        >
          See Detail <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
};

export default RoomCard;
