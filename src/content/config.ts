import { z, defineCollection } from "astro:content";

const aerospaceProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const csProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type CSProjectSchema = z.infer<typeof csProjectSchema>;
export type AerospaceProjectSchema = z.infer<typeof aerospaceProjectSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const csProjectCollection = defineCollection({ schema: csProjectSchema})
const aerospaceProjectCollection = defineCollection({ schema: aerospaceProjectSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'store': storeCollection,
    'aerospace-projects': aerospaceProjectCollection,
    'cs-projects': csProjectCollection
}