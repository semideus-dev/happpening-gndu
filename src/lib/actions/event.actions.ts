"use server";

import axios from "axios";

import { apiUrl, slugify, getTokens } from "@/lib/utils";
import { CreateEventProps } from "@/types/event";

export async function createEvent(event: CreateEventProps) {
  const { accessToken } = getTokens();

  const newEvent = {
    name: event.eventName,
    start_date: event.startDate,
    end_date: event.endDate,
    description: event.description,
    location: event.venue,
    event_type: event.type,
    event_poster: "great pics",
    expected_attendees: 300,
    is_free: event.isFree,
    is_published: event.isPublished,
    ticket_sale: event.ticketSale,
    event_category: event.category,
  };

  try {
    const response = await axios.post(
      `${apiUrl}/event/create-event`,
      newEvent,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4ODU0Mzk1LCJpYXQiOjE3Mzc1NTgzOTUsImp0aSI6ImZhNTQxZDA0NTZjODQxMDQ5ZDFlM2UwYzI1NjZkMWMyIiwidXNlcl9pZCI6Mn0.LOBB8LlxaWr3-d2s5wah2ooW6NEgsGwFGAWfxOCWGUQ",
        },
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
    } else {
      console.error(error);
    }
    return { success: false, error };
  }
}
