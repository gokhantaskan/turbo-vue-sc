export default defineEventHandler(event => {
  assertMethod(event, "GET");
  console.log(event.headers);
  return { success: true };
});
