export default defineEventHandler(async (ev) => {
  const storage = useStorage("db");

  const id = new Date().getTime().toString();
  await storage.setItem(`test:${id}`, {
    id,
    name: "test",
  });

  const keys = await storage.getKeys("test:");

  return keys;
});