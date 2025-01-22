// export interface Event {
//   eventName: string;
//   venue: string;
//   description: string;
//   type: string;
//   category: string;
//   // expectedAttendees: string;

//   poster: string; //

//   startDate: Date;
//   endDate: Date;

//   isFree: boolean;
//   isPublished: boolean;
//   ticketSale: boolean;
// }

export interface CreateEventProps {
  eventName: string;
  venue: string;
  description: string;
  type: string;
  category: string;
  // expectedAttendees: number;

  startDate: Date;
  endDate: Date;

  isFree: boolean;
  isPublished: boolean;
  ticketSale: boolean;
}
