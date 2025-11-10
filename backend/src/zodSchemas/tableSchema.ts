import z from "zod";

export const tableSchema = z.object({
  tableNo: z.number(),
  floorNumber: z.number(),
});
