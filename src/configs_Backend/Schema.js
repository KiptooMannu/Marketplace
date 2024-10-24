import { pgTable, varchar, integer, serial, text } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListings', {
  id: serial('id').primaryKey(),
  listingTitle: varchar('listingTitle').notNull(),
  tagline: varchar('tagline'), // optional tagline field
  originalPrice: varchar('originalPrice'),
  sellingPrice: varchar('sellingPrice').notNull(),
  category: varchar('category').notNull(),
  condition: varchar('condition').notNull(),
  make: varchar('make').notNull(),
  model: varchar('model').notNull(),
  year: integer('year').notNull(),
  driveType: varchar('driveType').notNull(),
  transmission: varchar('transmission').notNull(),
  fuelType: varchar('fuelType').notNull(),
  mileage: integer('mileage').notNull(),
  engineSize: varchar('engineSize'),
  cylinder: integer('cylinder'),
  color: varchar('color').notNull(),
  door: integer('door').notNull(),
  vin: varchar('vin'), // optional VIN field
  offerType: varchar('offerType'),
  listingDescription: text('listingDescription').notNull(), // description of the listing
});
