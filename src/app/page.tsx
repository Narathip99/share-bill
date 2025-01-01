import Link from "next/link";

import RoomCard from "@/components/rooms/room-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersIcon } from "@/components/ui/users";
import { CirclePlus, History } from "lucide-react";

export default function Home() {
  const isLoggedIn = false;

  const roomData = [
    {
      title: "Room 1",
      lastUpdated: "2 hours ago",
      total: 2345,
      people: 3,
      href: "/",
    },
    {
      title: "Room 1",
      lastUpdated: "2 hours ago",
      total: 5555,
      people: 3,
      href: "/",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)]">
      <div className="px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Create Your Room Now!</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Link href="/room" className="flex items-center gap-2">
                <CirclePlus /> Create
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div>
          <div className="my-2 flex justify-between">
            <h2 className="text-lg font-semibold">History</h2>
            <p className="text-sm flex items-center gap-2">
              <History className="w-4 h-4" />
              See all
            </p>
          </div>
          <div className="space-y-4">
            {roomData.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>

        <div>
          <div className="my-2">
            <h2 className="text-lg font-semibold">
              Additional features for members
            </h2>
          </div>
          <div className="flex gap-4">
            <Card className="p-4 space-y-2">
              <UsersIcon />
              <h3 className="font-semibold">Invite your friends</h3>
              <p className="text-sm text-gray-600">
                Invite your friends to join your room
              </p>
            </Card>
            <Card className="p-4 space-y-2">
              <UsersIcon />
              <h3 className="font-semibold">Invite your friends</h3>
              <p className="text-sm text-gray-600">
                Invite your friends to join your room
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full bg-background p-4 ">
        <Button className="w-full">
          <Link href="/register">Register Now!!!</Link>
        </Button>
      </div>
    </div>
  );
}
