import EventForm from "@/components/forms/event-form";
import PageHeader from "@/components/global/page-header";
import React from "react";

export default function NewEvent() {
  return (
    <section className="flex flex-col items-center justify-center space-y-4">
      <PageHeader
        header="Create Event"
        description="Enter the required details to create your new event."
      />
      <EventForm />
    </section>
  );
}
