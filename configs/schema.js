import { integer, json } from "drizzle-orm/gel-core";
import { numeric, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Listing=pgTable('Listing', {
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    tagline: varchar('tagline'),
    originalPrice: numeric('originalPrice'),
    sellingPrice: numeric('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    location: varchar('location').notNull(),
    description: varchar('description').notNull(),
    features: json('features'),
    createdBy: varchar('createdBy'),
    postedOn: varchar('postedOn'),
    userName: varchar('userName').default('SecondMat User'),
    userImageUrl: varchar('userImageUrl'),
    view:integer('view').default(0),
    status: varchar('status').default('active')
})

export const Images=pgTable('Images',{
    id: serial('id').primaryKey(),
    imageUrl:  varchar('imageUrl').notNull(),
    ListingId: integer('ListingId').notNull().references(()=>Listing.id)
})