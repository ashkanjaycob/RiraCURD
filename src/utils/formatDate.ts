// src/utils/dateUtils.ts

export function getCurrentDate(): string {
  const today = new Date();
  return today.toLocaleDateString("en-CA"); // en-CA for YYYY-MM-DD format
}

export function formatDate(date: string): string {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-CA"); // YYYY-MM-DD format in local time zone
}
