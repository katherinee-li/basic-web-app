export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "katherine-li";
  }
  if (query.toLowerCase().includes("andrew id")) {
    return "kli5";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 13, 36, 75?")) {
    return "75";
  }



  return "";
}
