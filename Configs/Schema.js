
import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carLisiting',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle'),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    offerType:varchar('offerType'),
    vin:varchar('vin'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('Immanuel'),
    userImageUrl:varchar('userImageUrl').default('https://www.google.com/imgres?q=person&imgurl=https%3A%2F%2Fimages.inc.com%2Fuploaded_files%2Fimage%2F1024x576%2Fgetty_481292845_77896.jpg&imgrefurl=https%3A%2F%2Fwww.inc.com%2Ferik-sherman%2F12-ways-to-become-that-popular-person-at-work.html&docid=2CzlkmOllhjJAM&tbnid=fugl9ywd8lqEWM&vet=12ahUKEwiHnZ_MoMeJAxW1ygIHHccQBeUQM3oECBYQAA..i&w=1024&h=576&hcb=2&ved=2ahUKEwiHnZ_MoMeJAxW1ygIHHccQBeUQM3oECBYQAA'),
    postedOn:varchar('postedOn')
})
export const CarImages=pgTable('carImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id)
})