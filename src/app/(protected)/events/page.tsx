"use client";

import React from "react";

import { events } from "@/constants";

import PageHeader from "@/components/global/page-header";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Plus, Search } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function EventsPage() {
  const categories = Array.from(new Set(events.map((event) => event.category)));

  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "All" || event.category === activeCategory)
  );

  return (
    <section className="w-full flex flex-col space-y-4">
      <PageHeader
        header="All Events"
        description="Discover exciting opportunities to connect, learn, and grow with events near you."
      />
      <div className="w-full flex items-center space-x-1 justify-center">
        <div className="relative w-[40%]">
          <Input
            className="peer ps-9"
            placeholder="Search for events..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Search size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
        <Button effect="expandIcon" icon={Plus} iconPlacement="right">
          Create Event
        </Button>
      </div>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="All" onClick={() => setActiveCategory("All")}>
            All
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="All" className="flex items-center justify-center">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" /> {event.date}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" /> {event.location}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Alert>
              <AlertDescription>
                No events found. Please try a different search term or category.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            {filteredEvents.filter((event) => event.category === category)
              .length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredEvents
                  .filter((event) => event.category === category)
                  .map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="flex items-center">
                          <CalendarDays className="mr-2 h-4 w-4" /> {event.date}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" /> {event.location}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button>View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            ) : (
              <Alert>
                <AlertDescription>
                  No events found in this category. Please try a different
                  category or search term.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
