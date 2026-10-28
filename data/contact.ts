export interface ContactDetails {
  phone: string;
  email: string;
  displayPhone: string;
  displayEmail: string;
  mapQuery: string;
  responseTimeNote: string;
}

/**
 * Single source of truth for organization contact details.
 * NOTE for developers / maintainers:
 * Until a specific street address is provided, mapQuery defaults to "India".
 * To change the map location, update `mapQuery` below (e.g., "Connaught Place, New Delhi, India").
 */
export const CONTACT_DETAILS: ContactDetails = {
  phone: "112233445566",
  email: "Wearesoop@gmail.com",
  displayPhone: "112233445566",
  displayEmail: "Wearesoop@gmail.com",
  mapQuery: "India",
  responseTimeNote: "We usually reply as soon as we can.",
};
