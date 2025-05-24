export default function generateUniqueIdWithDate() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Add a random string
  return `${timestamp}-${randomString}`;
}
