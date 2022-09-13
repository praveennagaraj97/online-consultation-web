import type { SlotEntity } from '../../../types/response/consultation.response';

export function filterSlotsByRange(
  timeSlot: 'morning' | 'afternoon' | 'evening',
  slots: SlotEntity[]
) {
  const getTime = (date: Date, hr: number, min: number) => {
    date.setHours(hr, min);
    return date;
  };

  switch (timeSlot) {
    // Filter the slots ranging from 8:00 AM to 11:30 AM
    case 'morning':
      return slots.filter(({ start }) => {
        const date = new Date(start);

        return (
          date >= getTime(new Date(start), 8, 0) &&
          date <= getTime(new Date(start), 11, 30)
        );
      });
    // Filter the slots ranging from 12:30 PM to 03:30 AM
    case 'afternoon':
      return slots.filter(({ start }) => {
        const date = new Date(start);
        return (
          date >= getTime(new Date(start), 12, 30) &&
          date <= getTime(new Date(start), 15, 30)
        );
      });
    // Filter the slots ranging from 04:30 AM to 07:30 AM
    case 'evening':
      return slots.filter(({ start }) => {
        const date = new Date(start);
        return (
          date >= getTime(new Date(start), 16, 30) &&
          date <= getTime(new Date(start), 19, 30)
        );
      });
    default:
      return slots;
  }
}
