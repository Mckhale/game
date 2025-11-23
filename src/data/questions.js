export const questions = {
  easy: [
    {
      id: 1,
      type: 'typing',
      prompt: "Complete the code to print 'Hello World' to the console:\nSystem.out.__________(\"Hello World\");",
      answer: "println",
      hint: "Use println() method"
    },
    {
      id: 2,
      type: 'typing',
      prompt: "Declare an integer variable named 'age' with value 25:\nint __________ = 25;",
      answer: "age",
      hint: "Use the variable name 'age'"
    },
    {
      id: 3,
      type: 'typing',
      prompt: "Create a String variable named 'name' with value 'John':\nString __________ = \"John\";",
      answer: "name",
      hint: "Use the variable name 'name'"
    },
    {
      id: 4,
      type: 'typing',
      prompt: "Write the symbol for single-line comments in Java:\n__________ This is a comment",
      answer: "//",
      hint: "Use two forward slashes"
    },
    {
      id: 5,
      type: 'typing',
      prompt: "Complete the if statement syntax:\nif (x __________ 5) {\n  System.out.println(\"x is greater than 5\");\n}",
      answer: ">",
      hint: "Use greater than operator"
    },
    {
      id: 6,
      type: 'typing',
      prompt: "Complete the for loop to count from 0 to 4:\nfor (int i = 0; i __________ 5; i++)",
      answer: "<",
      hint: "Use less than operator"
    },
    {
      id: 7,
      type: 'typing',
      prompt: "Declare an array of 5 integers:\nint[] numbers = new __________[5];",
      answer: "int",
      hint: "Use the int keyword"
    },
    {
      id: 8,
      type: 'typing',
      prompt: "Complete the method signature to return a String:\npublic __________ getName() {\n  return name;\n}",
      answer: "String",
      hint: "Use String as return type"
    },
    {
      id: 9,
      type: 'typing',
      prompt: "Complete the main method signature:\npublic static void main(__________[] args)",
      answer: "String",
      hint: "Use String array"
    },
    {
      id: 10,
      type: 'typing',
      prompt: "Declare a boolean variable named 'isActive' with value true:\nboolean __________ = true;",
      answer: "isActive",
      hint: "Use the variable name 'isActive'"
    }
  ],
  normal: [
    {
      id: 11,
      type: 'typing',
      prompt: "Complete the enhanced for loop:\nfor (String item : __________) {\n  System.out.println(item);\n}",
      answer: "items",
      hint: "Use the array/list name"
    },
    {
      id: 12,
      type: 'typing',
      prompt: "Complete the switch statement:\nint day = 3;\nswitch (__________) {\n  case 1: System.out.println(\"Monday\"); break;\n}",
      answer: "day",
      hint: "Use the day variable"
    },
    {
      id: 13,
      type: 'typing',
      prompt: "Create an ArrayList of Strings:\nArrayList<__________> list = new ArrayList<>();",
      answer: "String",
      hint: "Use String as generic type"
    },
    {
      id: 14,
      type: 'typing',
      prompt: "Complete the try-catch block:\ntry {\n  // risky code\n} catch (__________ e) {\n  System.out.println(\"Error: \" + e.getMessage());\n}",
      answer: "Exception",
      hint: "Use Exception class"
    },
    {
      id: 15,
      type: 'typing',
      prompt: "Convert a String to uppercase:\nString upper = text.__________();",
      answer: "toUpperCase",
      hint: "Use toUpperCase() method"
    },
    {
      id: 16,
      type: 'typing',
      prompt: "Complete the do-while loop condition:\ndo {\n  System.out.println(i);\n  i++;\n} while (i __________ 5);",
      answer: "<",
      hint: "Use less than operator"
    },
    {
      id: 17,
      type: 'typing',
      prompt: "Create a StringBuilder:\nStringBuilder sb = new __________();",
      answer: "StringBuilder",
      hint: "Use StringBuilder constructor"
    },
    {
      id: 18,
      type: 'typing',
      prompt: "Override the toString method:\npublic String __________() {\n  return \"Person: \" + name;\n}",
      answer: "toString",
      hint: "Use toString method name"
    },
    {
      id: 19,
      type: 'typing',
      prompt: "Complete the method to throw an exception:\npublic void validate(int age) {\n  if (age < 0) {\n    throw new __________(\"Age cannot be negative\");\n  }\n}",
      answer: "IllegalArgumentException",
      hint: "Use IllegalArgumentException"
    },
    {
      id: 20,
      type: 'typing',
      prompt: "Check if a String is empty:\nif (text.__________()) {\n  System.out.println(\"String is empty\");\n}",
      answer: "isEmpty",
      hint: "Use isEmpty() method"
    }
  ],
  hard: [
    {
      id: 21,
      type: 'typing',
      prompt: "Complete the generic method:\npublic static <T extends Comparable<T>> T max(T a, T b) {\n  return a.compareTo(b) __________ 0 ? a : b;\n}",
      answer: ">",
      hint: "Use greater than operator"
    },
    {
      id: 22,
      type: 'typing',
      prompt: "Complete the lambda expression:\nList<Integer> numbers = Arrays.asList(1, 2, 3);\nnumbers.forEach(__________ -> System.out.println(n));",
      answer: "n",
      hint: "Use parameter name 'n'"
    },
    {
      id: 23,
      type: 'typing',
      prompt: "Create an Optional with a value:\nOptional<String> opt = Optional.__________(\"Hello\");",
      answer: "of",
      hint: "Use of() method"
    },
    {
      id: 24,
      type: 'typing',
      prompt: "Complete the stream map operation:\nList<String> upper = names.stream()\n  .map(String::__________)\n  .collect(Collectors.toList());",
      answer: "toUpperCase",
      hint: "Use toUpperCase method reference"
    },
    {
      id: 25,
      type: 'typing',
      prompt: "Make a method thread-safe:\npublic __________ void incrementCounter() {\n  counter++;\n}",
      answer: "synchronized",
      hint: "Use synchronized keyword"
    },
    {
      id: 26,
      type: 'typing',
      prompt: "Implement a functional interface:\nCalculator add = (a, b) -> a __________ b;",
      answer: "+",
      hint: "Use plus operator"
    },
    {
      id: 27,
      type: 'typing',
      prompt: "Complete the CompletableFuture:\nCompletableFuture<String> future = CompletableFuture.__________(\"Hello\");",
      answer: "completedFuture",
      hint: "Use completedFuture() method"
    },
    {
      id: 28,
      type: 'typing',
      prompt: "Complete the method reference for sorting:\nnames.sort(String::__________);",
      answer: "compareTo",
      hint: "Use compareTo method reference"
    },
    {
      id: 29,
      type: 'typing',
      prompt: "Get the Class object:\nClass<?> clazz = __________.class;",
      answer: "String",
      hint: "Use String class"
    },
    {
      id: 30,
      type: 'typing',
      prompt: "Complete the custom annotation:\n@interface CustomAnnotation {\n  String __________();\n}",
      answer: "value",
      hint: "Use 'value' as method name"
    }
  ]
}

export function getRandomQuestions(difficulty, count = 10) {
  const pool = questions[difficulty] || questions.easy
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, pool.length))
}