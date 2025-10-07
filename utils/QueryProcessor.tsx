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

  if (query.toLowerCase().includes("Which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length==3){
    const x = numbers[0];
    const y = numbers[1];
    const z = numbers[2];
    }

    const largest = Math.max(x, y, z);
    return String(largest);
  }



  return "";
}
